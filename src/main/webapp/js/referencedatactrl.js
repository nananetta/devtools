var app = angular.module('MyApp');

app.factory('refdata', [ '$resource', function($resource) {
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
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "businessAssociateId",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 1,
		                                    "referencetype": "AWD",
		                                    "codevalue": "CLID",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 1,
		                                    "referencetype": "BLUEDOOR_PROPERTY_NAME",
		                                    "codevalue": "ClientId",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 1,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "BusinessAssociate.ExternalBusinessAssociateRef",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 1,
		                                    "referencetype": "COLLECTIVE_CORRESPONDENCE_PROPERTY_NAME",
		                                    "codevalue": "accountholderid",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 1,
		                                    "referencetype": "NEXDOX_PROPERTY_NAME",
		                                    "codevalue": "clientid",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 1,
		                                    "referencetype": "PENSION_CORRESPONDENCE_PROPERTY_NAME",
		                                    "codevalue": "MemberRef",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 2,
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "legalOwnerId",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 2,
		                                    "referencetype": "BLUEDOOR_PROPERTY_NAME",
		                                    "codevalue": "AccountId",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 2,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "LegalOwnership.ExternalLegalOwnershipRef",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 2,
		                                    "referencetype": "COLLECTIVE_CORRESPONDENCE_PROPERTY_NAME",
		                                    "codevalue": "accountnumber",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 2,
		                                    "referencetype": "NEXDOX_PROPERTY_NAME",
		                                    "codevalue": "unitholderid",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 3,
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "legalOwnerDesignation",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 3,
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "sedol",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 3,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "InvestmentVehicleClass.SEDOL",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 3,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "LegalOwnership.Designation",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 4,
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "fundName",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 4,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "InvestmentVehicleClass.InvVehClsLongName",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 5,
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "fundDistributionPayDate",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 5,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "Distribution.FundDistributionPaymentDate",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 6,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "Document.DocumentApplicableYear",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 7,
		                                    "referencetype": "AWD",
		                                    "codevalue": "AGEN",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 7,
		                                    "referencetype": "BLUEDOOR_PROPERTY_NAME",
		                                    "codevalue": "AgentId",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 7,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "Agent.ExternalAgentID",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 8,
		                                    "referencetype": "ALFRESCO_PROPERTY_NAME",
		                                    "codevalue": "legalOwnerId",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 8,
		                                    "referencetype": "CIM_PROPERTY_NAME",
		                                    "codevalue": "Policy.PolicyID",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 8,
		                                    "referencetype": "PENSION_CORRESPONDENCE_PROPERTY_NAME",
		                                    "codevalue": "PolicyRef",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 9,
		                                    "referencetype": "ALFRESCO_MANCO",
		                                    "codevalue": "JPMAM",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 9,
		                                    "referencetype": "CIM_MANCO",
		                                    "codevalue": "000133",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 10,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "Distributions",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 10,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000001",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 10,
		                                    "referencetype": "COLLECTIVES_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "1",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 11,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ClientStatement",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 11,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000002",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 11,
		                                    "referencetype": "COLLECTIVES_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "2",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 12,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ContractNote",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 12,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000003",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 12,
		                                    "referencetype": "COLLECTIVES_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "3",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 13,
		                                    "referencetype": "AWD_DOCUMENTTYPE",
		                                    "codevalue": "VALUE",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 13,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000004",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 13,
		                                    "referencetype": "COLLECTIVES_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "26",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 13,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "26",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 14,
		                                    "referencetype": "AWD_DOCUMENTTYPE",
		                                    "codevalue": "ILLUST",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 14,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000005",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 14,
		                                    "referencetype": "COLLECTIVES_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "27",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 14,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "27",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 15,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ChangeOfAddress",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 15,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000006",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 15,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "3",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 16,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ReachingAge74",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 16,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000007",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 16,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "4",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 17,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "PassedTRA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 17,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000008",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 17,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "5",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 18,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ChangeOfTRA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 18,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000009",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 18,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "6",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 19,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "3MonthsToTRA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 19,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000010",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 19,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "7",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 20,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "6MonthsToTRA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 20,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000011",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 20,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "8",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 21,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "RetirementPaymentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 21,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000012",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 21,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "9",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 22,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "RetirementSeriousIllHealthPaymentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 22,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000013",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 22,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "10",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 23,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "RetirementTriviaalityPaymentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 23,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000014",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 23,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "11",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 24,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "SwitchAndRedirectionConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 24,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000015",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 24,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "12",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 25,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "TransferInInvestmentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 25,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000016",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 25,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "13",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 26,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "TransferOutPaymentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 26,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000017",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 26,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "14",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 27,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "RefundPaymentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 27,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000018",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 27,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "15",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 28,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "DeathPaymentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 28,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000019",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 28,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "16",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 29,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "TrusteeInstructedDischargePaymentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 29,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000020",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 29,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "17",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 30,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ContributionChangeConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 30,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000021",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 30,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "18",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 31,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ActiveLeaverCommencementConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 31,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000022",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 31,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "19",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 32,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "SingleContributionInvestmentConfirm",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 32,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000023",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 32,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "20",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 33,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "ApplicationPack",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 33,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000024",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 33,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "21",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 34,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "WelcomePack",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 34,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000025",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 34,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "22",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 35,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "NewJoinerChaserAt30And60Days",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 35,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000026",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 35,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "23",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 36,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "6MonthsToLifestyleSwitch",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 36,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000027",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 36,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "24",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 37,
		                                    "referencetype": "ALFRESCO_DOCUMENTTYPE",
		                                    "codevalue": "SchemeLeaverOptions",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 37,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000028",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 37,
		                                    "referencetype": "PENSION_CORRESPONDENCE_DOCUMENTTYPE",
		                                    "codevalue": "25",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 38,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "COLLOUTPUT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 38,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000029",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 39,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "NINOCLETER",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 39,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000030",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 40,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "NINPLETTR",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 40,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000031",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 41,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "PFREBALCANCEL",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 41,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000032",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 42,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "S0607AUTOREBLLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 42,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000033",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 43,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "S0609CNCLINCOME",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 43,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000034",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 44,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "S0610INCOPTLTR",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 44,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000035",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 45,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "S0611CHDDTPELT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 45,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000036",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 46,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "S0636DDREV3PELT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 46,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000037",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 47,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "S0637DDINSFRMLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 47,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000038",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 48,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "S0638DDRESFRMLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 48,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000039",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 49,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000040",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 49,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0654TRANSFEROT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 50,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000041",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 50,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0655TRANSFEROT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 51,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000042",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 51,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0658TH98REGDEC",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 52,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000043",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 52,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0659TH99REGDEC",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 53,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000044",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 53,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0660NEWADDRESS",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 54,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000045",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 54,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0661OLDADDRESS",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 55,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000046",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 55,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0669TRANFUNDOT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 56,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000047",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 56,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0672TH128ONLCF",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 57,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000048",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 57,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0689CHADVNABLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 58,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000049",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 58,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0690FAADVTRFLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 59,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000050",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 59,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0691ADCADTRFLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 60,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000051",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 60,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0692BLKADTRFLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 61,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000052",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 61,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0693ADDEAUTHLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 62,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000053",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 62,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0694FAREMOVELT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 63,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000054",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 63,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0711NOTICEADVR",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 64,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000055",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 64,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0713CONFNEOWLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 65,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000056",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 65,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S0723CHGCLDETLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 66,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000057",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 66,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1012CONVUPGRLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 67,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000058",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 67,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1013AWECLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 68,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000059",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 68,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1199BKDATEVLUN",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 69,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000060",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 69,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1200BLOCKTRANS",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 70,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000061",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 70,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1202CANCLETTER",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 71,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000062",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 71,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1206DISCHRFORM",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 72,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000063",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 72,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1434RQNINOMRLT",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 73,
		                                    "referencetype": "BLUEDOOR_DOCUMENTTYPE",
		                                    "codevalue": "DT0000000064",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 73,
		                                    "referencetype": "CIM_DOCUMENTTYPE",
		                                    "codevalue": "S1444ADDRESSCNF",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 74,
		                                    "referencetype": "ALFRESCO_MANCO",
		                                    "codevalue": "AVIVAGBP",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 74,
		                                    "referencetype": "CIM_MANCO",
		                                    "codevalue": "000071",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 75,
		                                    "referencetype": "ALFRESCO_MANCO",
		                                    "codevalue": "INV",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 75,
		                                    "referencetype": "CIM_MANCO",
		                                    "codevalue": "000102",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 76,
		                                    "referencetype": "ALFRESCO_OWNER_TYPE",
		                                    "codevalue": "CL",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 76,
		                                    "referencetype": "BLUEDOOR_OWNER_TYPE",
		                                    "codevalue": "Client",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 76,
		                                    "referencetype": "CIM_OWNER_TYPE",
		                                    "codevalue": "BusinessAssociate",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 76,
		                                    "referencetype": "COLLECTIVES_OWNER_TYPE",
		                                    "codevalue": "Client",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 76,
		                                    "referencetype": "PENSION_CORRESPONDENCE_OWNER_TYPE",
		                                    "codevalue": "Member",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 77,
		                                    "referencetype": "BLUEDOOR_OWNER_TYPE",
		                                    "codevalue": "Account",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 77,
		                                    "referencetype": "CIM_OWNER_TYPE",
		                                    "codevalue": "LegalOwnership",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 77,
		                                    "referencetype": "COLLECTIVES_OWNER_TYPE",
		                                    "codevalue": "Account",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 78,
		                                    "referencetype": "ALFRESCO_OWNER_TYPE",
		                                    "codevalue": "AG",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 78,
		                                    "referencetype": "BLUEDOOR_OWNER_TYPE",
		                                    "codevalue": "Adviser",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 78,
		                                    "referencetype": "CIM_OWNER_TYPE",
		                                    "codevalue": "Agent",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 79,
		                                    "referencetype": "CIM_OWNER_TYPE",
		                                    "codevalue": "Policy",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 79,
		                                    "referencetype": "PENSION_CORRESPONDENCE_OWNER_TYPE",
		                                    "codevalue": "Policy",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 81,
		                                    "referencetype": "ATG_ISOCOUNTRYCODE",
		                                    "codevalue": "AF",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 81,
		                                    "referencetype": "CIM_ISOCOUNTRYCODE",
		                                    "codevalue": "AFG",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 81,
		                                    "referencetype": "ISOALPHA2_COUNTRYCODE",
		                                    "codevalue": "AF",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 81,
		                                    "referencetype": "ISOALPHA3_COUNTRYCODE",
		                                    "codevalue": "AFG",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 81,
		                                    "referencetype": "PERCANA_ISOCOUNTRYCODE",
		                                    "codevalue": "AF",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 82,
		                                    "referencetype": "ATG_ISOCOUNTRYCODE",
		                                    "codevalue": "AX",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 82,
		                                    "referencetype": "CIM_ISOCOUNTRYCODE",
		                                    "codevalue": "ALA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 82,
		                                    "referencetype": "ISOALPHA2_COUNTRYCODE",
		                                    "codevalue": "AX",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 82,
		                                    "referencetype": "ISOALPHA3_COUNTRYCODE",
		                                    "codevalue": "ALA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 82,
		                                    "referencetype": "PERCANA_ISOCOUNTRYCODE",
		                                    "codevalue": "AX",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 83,
		                                    "referencetype": "ATG_ISOCOUNTRYCODE",
		                                    "codevalue": "AL",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 83,
		                                    "referencetype": "CIM_ISOCOUNTRYCODE",
		                                    "codevalue": "ALB",
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
		                                    "mappingid": 341,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "1045",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 342,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "NLD",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 342,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "5",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 343,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "ENG",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 343,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "2057",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 344,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "FIN",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 344,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "3",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 345,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "FRA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 345,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "6",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 346,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "DEU",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 346,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "8",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 347,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "POR",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 347,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "9",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 348,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "SPA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 348,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "7",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 349,
		                                    "referencetype": "CIM_LANGUAGE",
		                                    "codevalue": "SWE",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 349,
		                                    "referencetype": "PERCANA_LANGUAGE",
		                                    "codevalue": "4",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 350,
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "W1",
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
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "W2",
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
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "W4",
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
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "M1",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 353,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "Monthly",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 354,
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "M3",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 354,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "Quarterly",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 355,
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "M6",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 355,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "BiAnnually",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 356,
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "MA",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 356,
		                                    "referencetype": "CIM_PAYMENT_FREQUENCY",
		                                    "codevalue": "Annually",
		                                    "synced": true
		                                 },
		                                    {
		                                    "mappingid": 357,
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "IO",
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
		                                    "referencetype": "ALTUS_PAYMENT_FREQUENCY",
		                                    "codevalue": "IR",
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

