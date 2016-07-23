var app = angular.module('MyApp');

app.factory('dependency', [ '$resource', function($resource) {
    return $resource('/rest/ifds/admin/devtools/services/refdata', {}, {
	get : {
	    method : 'GET',
	    headers : {
		'Accept' : 'application/json',
		'Content-Type' : 'application/json'
	    }
	}
    });
} ])

  
app.controller('DependencyCtrl', function ($scope, dependency, NgTableParams) {
	var self = this;
	
	self.result = [];
    

	dependency.get().$promise.then(function(result) {
		alert("success");
	}, function(error) {
		var result = {"ReferenceData": [
		                                {
		                                    "mappingid": 1,
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "businessAssociateId",
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
		                              ]};
	    });
		

});

