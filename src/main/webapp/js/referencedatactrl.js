var app = angular.module('MyApp');

app.factory('refdata', [ '$resource', function($resource) {
    return $resource('/rest/admin/devtools/services/refdata', {}, {
	get : {
	    method : 'GET',
	    headers : {
		'Accept' : 'application/json',
		'Content-Type' : 'application/json'
	    }
	}
    });
} ])

app.run(configureDefaults);
  configureDefaults.$inject = ["ngTableDefaults"];

  function configureDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 20;
    ngTableDefaults.settings.counts = [20, 50, 100, 500];
  };
  
app.controller('ReferenceDataCtrl', function ($scope, refdata, NgTableParams) {
	var self = this;
	self.result = [];
    self.tableParams = new NgTableParams({}, {
    	dataset: this.result
    });

    
    self.statusValues = [{id:"sync", title:"Sync"},{id:"out of sync", title:"Out of Sync"}];

	refdata.get().$promise.then(function(result) {
		alert("success");
	}, function(error) {
		var result = {"ReferenceData": [
		                                {
		                                    "mappingid": 1,
		                                    "referencetype": "DCSPROPERTY_NAME",
		                                    "codevalue": "businessAssociateId",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 83,
		                                    "referencetype": "ISOALPHA2_COUNTRYCODE",
		                                    "codevalue": "AL",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 83,
		                                    "referencetype": "ISOALPHA3_COUNTRYCODE",
		                                    "codevalue": "ALB",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 83,
		                                    "referencetype": "PERCANA_ISOCOUNTRYCODE",
		                                    "codevalue": "AL",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 107,
		                                    "referencetype": "ATG_ISOCOUNTRYCODE",
		                                    "codevalue": "BO",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 341,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "POL",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 342,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "NLD",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 343,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "ENG",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 344,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "FIN",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 345,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "FRA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 346,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "DEU",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 347,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "POR",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 348,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "SPA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 349,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "SWE",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 350,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "Weekly",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 351,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "Fortnightly",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 352,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "4Weekly",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 353,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "Monthly",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 357,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "OneOff",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 358,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "Irregular",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 359,
		                                    "referencetype": "AML_COUNTRYCODE",
		                                    "codevalue": "UK",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 359,
		                                    "referencetype": "ISOALPHA2_COUNTRYCODE",
		                                    "codevalue": "UK",
		                                    "synced": true
		                                 }
		                              ]}
		
		
		self.result = result.ReferenceData.map(function(item){
			item.status = item.synced?"sync":"out of sync";
			item.status.lableclass = item.sync?"label label-success":"label label-warning";
			return item;
	    });
		$scope.tableParams = new NgTableParams({}, { dataset:$scope.refdata  });

		
		self.tableParams.settings({
	        dataset: self.result
	      });
	});

});

