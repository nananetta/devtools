var app = angular.module('MyApp');

app.factory('configs', [ '$resource', function($resource) {
    return $resource('/invoke/ifds.admin.devtools.services/getConfig', {}, {
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
  
app.controller('ConfigurationCtrl', function ($scope, configs, NgTableParams) {
	var self = this;
	
	self.result = [];
    self.tableParams = new NgTableParams({}, {
    	dataset:this.result
    });
    
    self.statusValues = [{id:"sync", title:"Sync"},{id:"out of sync", title:"Out of Sync"}];

	configs.get().$promise.then(function(result) {
		alert("success");
	}, function(error) {
		var result = {
				   "selectConfigurationOutput": {"results":    [
				                                                {
				                                             "configID": 140547,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFERIN-INFORMATIONREQUESTREJECTED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140549,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFERIN-REJECTED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140550,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.TRANSFERINASSET-REJECTED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140551,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFERIN-CONFIRMED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140552,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.TRANSFERINASSET-CONFIRMED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140553,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.PAYMENTIN-ADVICERECEIVED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140554,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFERIN-COMPLETED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140555,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFERIN-INFORMATIONREQUESTSENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140556,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFERIN-SENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140557,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.TRANSFERINASSET-SENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140558,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.INTERNALTRANSFER-SENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140559,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.INFORMATIONREQUEST-REQUESTED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140560,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.INFORMATIONREQUEST-NOTIFIED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140561,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.INFORMATIONREQUEST-SENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140563,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFEROUT-CREATED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140565,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFEROUT-NOTIFIED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140566,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.TRANSFEROUTASSET-CONFIRMED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140567,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFEROUT-MARKTRANSFERASCOMPLETE",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140568,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.TRANSFEROUTASSET-SENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140569,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFEROUT-TRANSFERCOMPLETESENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140570,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFERIN-INFORMATIONRESPONSERECEIVED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140571,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.TRANSFEROUTASSET-REJECTED",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140572,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.VALIDATE.ACCOUNTTRANSFEROUT-TRANSFERCONFIRMATIONSENT",
				                                             "configValue": "Valid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140573,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.JMS_CONNECTION_ALIAS",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140574,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.account.maintenance.accounttransfer.ACCOUNT_TRANSFER_QUEUE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140575,
				                                             "configName": "IFDS_AS_ATG",
				                                             "configKey": "NOTIFY_V1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "QUEUE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142294,
				                                             "configName": "IFDS_AS_Bluedoor_Pricing",
				                                             "configKey": "processBDAssetPriceData_v1_0.CONNECTION_ALIAS_NAME",
				                                             "configValue": "ASSETPRICE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 87,
				                                             "configName": "IFDS_AS_CTN_Dealing",
				                                             "configKey": "generateCTNOrderRequest_v1_0.MARKETDEAL.ALIAS",
				                                             "configValue": "CTN_WSHTTP_{0}{1}",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 81,
				                                             "configName": "IFDS_AS_EMX_Dealing",
				                                             "configKey": "generateEMXOrderRequest_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_EXTERNAL_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 82,
				                                             "configName": "IFDS_AS_EMX_Dealing",
				                                             "configKey": "generateEMXOrderRequest_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.as.emx.dealing.EMX_OUTBOUND_QUEUE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 83,
				                                             "configName": "IFDS_AS_EMX_Dealing",
				                                             "configKey": "generateEMXOrderRequest_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Queue",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 84,
				                                             "configName": "IFDS_AS_FAX_Dealing",
				                                             "configKey": "generateFaxOrderRequest_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 85,
				                                             "configName": "IFDS_AS_FAX_Dealing",
				                                             "configKey": "generateFaxOrderRequest_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.as.fax.dealing.FAX_ORDER_QUEUE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86,
				                                             "configName": "IFDS_AS_FAX_Dealing",
				                                             "configKey": "generateFaxOrderRequest_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Queue",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130243,
				                                             "configName": "IFDS_AS_FAX_Dealing",
				                                             "configKey": "checkFaxOrderStatus_v1_0.FAX_QUERY_URL",
				                                             "configValue": "http://localhost:8080/success",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108366,
				                                             "configName": "IFDS_AS_FAX_Dealing",
				                                             "configKey": "mapSelectFaxOrders_v1_0_To_FaxOrderListDT.DATA_SIZE",
				                                             "configValue": "45",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108367,
				                                             "configName": "IFDS_AS_FAX_Dealing",
				                                             "configKey": "generateFaxOrderRequest_v1_0.RIGHT_FAX_URL",
				                                             "configValue": "http://localhost:8080/RightFaxSuccessCase",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108370,
				                                             "configName": "IFDS_AS_FAX_Dealing",
				                                             "configKey": "generateFaxOrderRequest_v1_0.SENDER_USER",
				                                             "configValue": "RF_USER",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142289,
				                                             "configName": "IFDS_AS_FE_Pricing",
				                                             "configKey": "processAssetPrice_v1_0.MCID:OM",
				                                             "configValue": "000146",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142290,
				                                             "configName": "IFDS_AS_FE_Pricing",
				                                             "configKey": "processAssetPrice_v1_0.JMS_CONNECTION_ALIAS",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142292,
				                                             "configName": "IFDS_AS_FE_Pricing",
				                                             "configKey": "processAssetPrice_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.product.pricing.ASSET_PRICE_FEED_TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142293,
				                                             "configName": "IFDS_AS_FE_Pricing",
				                                             "configKey": "processAssetPrice_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163175,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.GROUP.SEARCHGROUP.SCOPE",
				                                             "configValue": "onelevel",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163179,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.900001.ERROR.SERVER",
				                                             "configValue": "ERROR",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163180,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ERROR.BINDDN",
				                                             "configValue": "uid=admin,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163181,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ERROR.BINDPASSWORD",
				                                             "configValue": "secret",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163198,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.ALL.SERVER",
				                                             "configValue": "LOCAL_LDAP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163404,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.ALL.SEARCHGROUP.SCOPE",
				                                             "configValue": "onelevel",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163405,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.ALL.SEARCHUSER.LDAPBASE",
				                                             "configValue": "ou=users,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163406,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.ALL.SEARCHUSER.SCOPE",
				                                             "configValue": "subtree",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163407,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.ALL.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=groups,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108361,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_PROVIDED_INFO_INSUFFICIENT",
				                                             "configValue": "1101316",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108362,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_PROVIDED_INFO_INSUFFICIENT",
				                                             "configValue": "Insufficient information provided",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108363,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_VALUE_TYPE_NOT_SUPPORT",
				                                             "configValue": "1101317",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108364,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_VALUE_TYPE_NOT_SUPPORT",
				                                             "configValue": "Type of value for this LDAP attribute is not supported",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 97972,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ERROR.URL",
				                                             "configValue": "ladap://localhost:389",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34123,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.iptiQ.SERVER",
				                                             "configValue": "LOCAL_LDAP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34124,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.iptiQ.SEARCHGROUP.SCOPE",
				                                             "configValue": "onelevel",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34125,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.iptiQ.SEARCHUSER.LDAPBASE",
				                                             "configValue": "ou=users,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34126,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.iptiQ.SEARCHUSER.SCOPE",
				                                             "configValue": "subtree",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34127,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.iptiQ.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=groups,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 44557,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.100036.IFDS-WEB-PORTAL.SERVER",
				                                             "configValue": "INVALDSERVER",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 44558,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.IFDS-WEB-PORTAL.SEARCHUSER.LDAPBASE\r\n",
				                                             "configValue": "ou=users,ou=onlineservices,dc=ifdsgroup,dc=co,dc=uk\r\n",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 44564,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.IFDS-WEB-PORTAL.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=groups,ou=onlineservices,dc=ifdsgroup,dc=co,dc=uk\r\n",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 44565,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.IFDS-WEB-PORTAL.SEARCHGROUP.SCOPE\r\n",
				                                             "configValue": "ONELEVEL_SCOPE\r\n",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 44566,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.100036.IFDS-WEB-PORTAL.SERVER\r\n",
				                                             "configValue": "INVALDSERVER\r\n",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 117,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.LOCAL_LDAP.URL",
				                                             "configValue": "ldap://localhost:389",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 118,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.LOCAL_LDAP.BINDDN",
				                                             "configValue": "uid=admin,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 119,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.LOCAL_LDAP.BINDPASSWORD",
				                                             "configValue": "secret",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.IFDS-WEB-PORTAL.SEARCHUSER.LDAPBASE",
				                                             "configValue": "ou=users,ou=onlineservices,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 121,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.IFDS-WEB-PORTAL.SEARCHUSER.SCOPE",
				                                             "configValue": "subtree",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 122,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.IFDS-WEB-PORTAL.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=groups,ou=onlineservices,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33272,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.GROUPWEB.SERVER",
				                                             "configValue": "LOCAL_LDAP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33273,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.GROUPWEB.SEARCHUSER.SCOPE",
				                                             "configValue": "subtree",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33274,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.GROUPWEB.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=users,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33275,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.GROUPWEB.SEARCHUSER.LDAPBASE",
				                                             "configValue": "ou=users,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33277,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000036.GROUPWEB.SEARCHGROUP.SCOPE",
				                                             "configValue": "onelevel",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33328,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.IFDS-WEB-PORTA.SEARCHGROUP.SCOPE",
				                                             "configValue": "onelevel",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33641,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.GROUP.SEARCHUSER.LDAPBASE",
				                                             "configValue": "ou=users,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33642,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.GROUP.SEARCHUSER.SCOPE",
				                                             "configValue": "subtree",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33643,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.GROUP.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=groups,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33649,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000010.GROUP.SERVER",
				                                             "configValue": "LOCAL_LDAP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 31,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.IFDS-WEB-PORTAL.SERVER",
				                                             "configValue": "LOCAL_LDAP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 35,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.IFDS-WEB-PORTAL.SEARCHGROUP.SCOPE",
				                                             "configValue": "onelevel",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 36,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.IFDS-WEB-PORTAL.SEARCHUSER.LDAPBASE",
				                                             "configValue": "ou=users,ou=onlineservices,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 37,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.IFDS-WEB-PORTAL.SEARCHUSER.SCOPE",
				                                             "configValue": "subtree",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 38,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.ALL.ALL.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=groups,ou=onlineservices,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 39,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.GROUP-WEB.SEARCHUSER.LDAPBASE",
				                                             "configValue": "ou=users,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 40,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.GROUP-WEB.SEARCHUSER.SCOPE",
				                                             "configValue": "subtree",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 41,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.GROUP-WEB.SEARCHGROUP.LDAPBASE",
				                                             "configValue": "ou=groups,ou=groupweb,dc=ifdsgroup,dc=co,dc=uk",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 42,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.GROUP-WEB.SEARCHGROUP.SCOPE",
				                                             "configValue": "onelevel",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 43,
				                                             "configName": "IFDS_AS_LDAP_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP.000110.GROUP-WEB.SERVER",
				                                             "configValue": "LOCAL_LDAP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 54523,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "addContact_v1_0.CONTACT_EXISTED_CODE",
				                                             "configValue": "2101001",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 54524,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "addContact_v1_0.CONTACT_EXISTED_TEXT",
				                                             "configValue": "The contact already exist, identical contact will not be added.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 54525,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateContact_v1_0.CONTACT_NOT_MATCH_CODE",
				                                             "configValue": "1101040",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 54526,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateContact_v1_0.CONTACT_NOT_MATCH_TEXT",
				                                             "configValue": "Cannot find the contact to update.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34500,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateCorporateClient_v1_0.CLIENT_NOT_MATCH_CODE",
				                                             "configValue": "1101038",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34501,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateCorporateClient_v1_0.CLIENT_NOT_MATCH_TEXT",
				                                             "configValue": "The client is not a corporate client, please provide the correct corporate client ID.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34502,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updatePersonalClient_v1_0.CLIENT_NOT_MATCH_CODE",
				                                             "configValue": "1101039",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34503,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updatePersonalClient_v1_0.CLIENT_NOT_MATCH_TEXT",
				                                             "configValue": "The client is not a personal client, please provide the correct personal client ID.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34504,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateBankAccount_v1_0.BANKACCOUNT_NOT_MATCH_CODE",
				                                             "configValue": "1101041",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34505,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateBankAccount_v1_0.BANKACCOUNT_NOT_MATCH_TEXT",
				                                             "configValue": "The bank account to be updated was not found. Please provide the correct bank account ID.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34506,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateAddress_v1_0.ADDRESS_NOT_MATCH_CODE",
				                                             "configValue": "1101042",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34507,
				                                             "configName": "IFDS_AS_Percana_Client",
				                                             "configKey": "updateAddress_v1_0.ADDRESS_NOT_MATCH_TEXT",
				                                             "configValue": "The address to be updated was not found. Please provide the correct address ID.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 88,
				                                             "configName": "IFDS_AS_WBS_Dealing",
				                                             "configKey": "generateWBSOrderRequest_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_EXTERNAL_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 89,
				                                             "configName": "IFDS_AS_WBS_Dealing",
				                                             "configKey": "generateWBSOrderRequest_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.as.wbs.dealing.WBS_OUTBOUND_QUEUE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 90,
				                                             "configName": "IFDS_AS_WBS_Dealing",
				                                             "configKey": "generateWBSOrderRequest_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Queue",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 174,
				                                             "configName": "IFDS_BS_Client_InvestorMgmt_ClientCommand",
				                                             "configKey": "maintainInvestorDetails_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 175,
				                                             "configName": "IFDS_BS_Client_InvestorMgmt_ClientCommand",
				                                             "configKey": "maintainInvestorDetails_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.client.investormgmt.clientcommand.MAINTAIN_INVESTOR_DETAILS_TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 176,
				                                             "configName": "IFDS_BS_Client_InvestorMgmt_ClientCommand",
				                                             "configKey": "maintainInvestorDetails_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Topic",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75,
				                                             "configName": "IFDS_BS_Dealing_Deal_MarketDeal",
				                                             "configKey": "submitOrder_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 76,
				                                             "configName": "IFDS_BS_Dealing_Deal_MarketDeal",
				                                             "configKey": "submitOrder_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.dealing.deal.MARKET_DEAL_OUTBOUND_TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 77,
				                                             "configName": "IFDS_BS_Dealing_Deal_MarketDeal",
				                                             "configKey": "submitOrder_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Topic",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 78,
				                                             "configName": "IFDS_BS_Dealing_Deal_MarketDeal",
				                                             "configKey": "submitOrderResponse_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 79,
				                                             "configName": "IFDS_BS_Dealing_Deal_MarketDeal",
				                                             "configKey": "submitOrderResponse_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.dealing.deal.MARKET_DEAL_INBOUND_TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 80,
				                                             "configName": "IFDS_BS_Dealing_Deal_MarketDeal",
				                                             "configKey": "submitOrderResponse_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Topic",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 171,
				                                             "configName": "IFDS_BS_Dealing_Deal_TransactionCommand",
				                                             "configKey": "cancelTransaction_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 172,
				                                             "configName": "IFDS_BS_Dealing_Deal_TransactionCommand",
				                                             "configKey": "cancelTransaction_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.dealing.deal.transactioncommand.CANCEL_TRANSACTION_TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 173,
				                                             "configName": "IFDS_BS_Dealing_Deal_TransactionCommand",
				                                             "configKey": "cancelTransaction_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Topic",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 135,
				                                             "configName": "IFDS_BS_Dealing_Deal_TransactionCommand",
				                                             "configKey": "processSwitch_v1_0.JMS_CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 136,
				                                             "configName": "IFDS_BS_Dealing_Deal_TransactionCommand",
				                                             "configKey": "processSwitch_v1_0.JMS_DESTINATION_NAME",
				                                             "configValue": "ifds.dealing.deal.transactioncommand.PROCESS_SWITCH_TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 137,
				                                             "configName": "IFDS_BS_Dealing_Deal_TransactionCommand",
				                                             "configKey": "processSwitch_v1_0.JMS_DESTINATION_TYPE",
				                                             "configValue": "Topic",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 22,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.MaxRetrieve",
				                                             "configValue": "500",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 23,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.USERID.123/AN64312",
				                                             "configValue": "ISV934",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 24,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.PASSWORD.123/AN64312",
				                                             "configValue": "dGVzdGluZzE=",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 25,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.RETRYCOUNT",
				                                             "configValue": "3",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 26,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.TOKENTIMEOUT",
				                                             "configValue": "4",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 27,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.USERID.1234",
				                                             "configValue": "MockUserId",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 28,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.PASSWORD.1234",
				                                             "configValue": "MockPassword",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 29,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.SYSTEMTYPECODE",
				                                             "configValue": "HMRC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 30,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.WSTIMEOUT",
				                                             "configValue": "120000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 133,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.PROTOCOL",
				                                             "configValue": "HTTPS",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 134,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.URLPATH",
				                                             "configValue": "dpsauthentication/service",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 177,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.Version",
				                                             "configValue": "1",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 178,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.VendorID.123/AN64312",
				                                             "configValue": "7173",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 179,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.Service",
				                                             "configValue": "PAYE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 180,
				                                             "configName": "IFDS_BS_Financial_Taxation",
				                                             "configKey": "RetrieveTaxCode.EntityType",
				                                             "configValue": "EmpRef",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 54536,
				                                             "configName": "IFDS_BS_Financials_BankingMgmt_BankAccount",
				                                             "configKey": "validateBankIdentifierWithDetail_v1_0.BIC_NOT_VALIDATE_CODE",
				                                             "configValue": "1",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 54537,
				                                             "configName": "IFDS_BS_Financials_BankingMgmt_BankAccount",
				                                             "configKey": "validateBankIdentifierWithDetail_v1_0.BIC_NOT_VALIDATE_TEXT",
				                                             "configValue": "Could not validate the BIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120235,
				                                             "configName": "IFDS_BS_Mgmt_RegulatoryReporting_AltusSubmission",
				                                             "configKey": "COMMONALTUSSUBMISSION_V1_0.ACCESSCREDENTIALS.USERNAME",
				                                             "configValue": "username",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120236,
				                                             "configName": "IFDS_BS_Mgmt_RegulatoryReporting_AltusSubmission",
				                                             "configKey": "COMMONALTUSSUBMISSION_V1_0.ACCESSCREDENTIALS.PASSWORD",
				                                             "configValue": "password",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120237,
				                                             "configName": "IFDS_BS_Mgmt_RegulatoryReporting_AltusSubmission",
				                                             "configKey": "COMMONALTUSSUBMISSION_V1_0.ACCESSCREDENTIALS.CLIENTID",
				                                             "configValue": "12345",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75651,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.ADDRESS_FORMATTED_FAIL_CODE",
				                                             "configValue": "1101288",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75652,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.ADDRESS_FORMATTED_FAIL_TEXT",
				                                             "configValue": "Failed to format address due to lack of data.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75653,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "validateAddress_v1_0.MULTIPLE_ADDRESS_FOUND_CODE",
				                                             "configValue": "1101289",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75654,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "validateAddress_v1_0.MULTIPLE_ADDRESS_FOUND_TEXT",
				                                             "configValue": "Multiple addresses are matched or this is an imprecise address.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75655,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "validateAddress_v1_0.NO_ADDRESS_FOUND_CODE",
				                                             "configValue": "1101290",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75656,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "validateAddress_v1_0.NO_ADDRESS_FOUND_TEXT",
				                                             "configValue": "No address found.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75657,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.ADDRESS_FORMATTED_SOAP_ERROR_CODE",
				                                             "configValue": "2201005",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75658,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.ADDRESS_FORMATTED_SOAP_ERROR_TEXT",
				                                             "configValue": "Failed to format address due to possibly intermittent error.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75659,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "findAddress_v1_0.MORE_INFORMATION_REQUIRED_CODE",
				                                             "configValue": "2201003",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75660,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "findAddress_v1_0.MORE_INFORMATION_REQUIRED_TEXT",
				                                             "configValue": "Further information required.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75661,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "findAddress_v1_0.NO_ADDRESS_FOUND_CODE",
				                                             "configValue": "2201004",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 75662,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "findAddress_v1_0.NO_ADDRESS_FOUND_TEXT",
				                                             "configValue": "No address found.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 199,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_AUTHENTICATE_COREPASSWORD",
				                                             "configValue": "123",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 200,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_AUTHENTICATE_COREUSERNAME",
				                                             "configValue": "cUsername",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 201,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_AUTHENTICATE_NON_COREPASSWORD",
				                                             "configValue": "111",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 202,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_AUTHENTICATE_NON_COREUSERNAME",
				                                             "configValue": "nuser",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 203,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_PROXYOBJECT_COREPASSWORD",
				                                             "configValue": "222",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 204,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_PROXYOBJECT_PORT",
				                                             "configValue": "port",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 205,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_PROXYOBJECT_PROXY",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 206,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_PROXYOBJECT_SERVER",
				                                             "configValue": "server",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 207,
				                                             "configName": "IFDS_BS_Support_Address",
				                                             "configKey": "commonAddress_v1_0.EQAS_PROXYOBJECT_USERNAME",
				                                             "configValue": "puser",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140598,
				                                             "configName": "IFDS_BS_Support_DocumentMgmt_EntDocRepo",
				                                             "configKey": "RepositoryID_001",
				                                             "configValue": "NexDoxDocumentRepository",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140599,
				                                             "configName": "IFDS_BS_Support_DocumentMgmt_EntDocRepo",
				                                             "configKey": "RepositoryID_002",
				                                             "configValue": "AWD10DocumentRepository",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140600,
				                                             "configName": "IFDS_BS_Support_DocumentMgmt_EntDocRepo",
				                                             "configKey": "RepositoryID_003",
				                                             "configValue": "DocrepoDocumentRepository",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140601,
				                                             "configName": "IFDS_BS_Support_DocumentMgmt_EntDocRepo",
				                                             "configKey": "RepositoryID_004",
				                                             "configValue": "BluedoorDocumentRepository",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140602,
				                                             "configName": "IFDS_BS_Support_DocumentMgmt_EntDocRepo",
				                                             "configKey": "RepositoryID_005",
				                                             "configValue": "OMDocumentRepository",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130240,
				                                             "configName": "IFDS_BS_Support_ProcessMgmt_EntityMgmt",
				                                             "configKey": "WKMC_NS",
				                                             "configValue": "http://schemas.dstbluedoor.com/ODMS/wkmc/v1_0_0_0",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130241,
				                                             "configName": "IFDS_BS_Support_ProcessMgmt_EntityMgmt",
				                                             "configKey": "WKMC_VERSION",
				                                             "configValue": "1.0.0.0",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108337,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.LOGINFAILURELOCKOUTSTRATEGY.TEMPORARY.MAXFAILEDATTEMPTS",
				                                             "configValue": "5",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108338,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.LOGINFAILURELOCKOUTSTRATEGY.PERMANENT.MAXFAILEDATTEMPTS",
				                                             "configValue": "6",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108341,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.LOGINFAILURELOCKOUTSTRATEGY.TEMPORARY.LOCKOUTDURATION",
				                                             "configValue": "5",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163550,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP_ERCDE_LOGIN_ID_ALREADY_EXISTS",
				                                             "configValue": "5001502",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163551,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.LDAP_ERTXT_LOGIN_ID_ALREADY_EXISTS",
				                                             "configValue": "User with the same identification already exists.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163711,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.ALL.ALL.LOGINPOLICY.MAXSUCCESSLOGINHISTORY",
				                                             "configValue": "5",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163720,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.ALL.ALL.LOGINPOLICY.MAXFAILEDLOGINHISTORY",
				                                             "configValue": "5",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33271,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "validateUserPassword_v1_0.ALL.ALL.PASSWORDPATTERN",
				                                             "configValue": "[\\x20-\\x7E\\xA3]{6,}",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 184,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.IFDS-WEB-PORTAL.TCPOLICY.ALLOW_ANY_TCACCEPTED_TIME",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86526,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_SECURE_QUESTION_NOT_SUPPORT",
				                                             "configValue": "1101315",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86527,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_SECURE_QUESTION_NOT_SUPPORT",
				                                             "configValue": "Invalid security question",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86281,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_TC_OCCUR_IN_PAST",
				                                             "configValue": "1101043",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86282,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_TC_OCCUR_IN_PAST",
				                                             "configValue": "Terms and Conditions acceptance should occur in the past",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86284,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_AUTHENTICATE_FAILED",
				                                             "configValue": "1101022",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86285,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_AUTHENTICATE_FAILED",
				                                             "configValue": "Authentication failed, the user credential passed in are invalid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86286,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_INVALID_CURRENT_PASSWORD",
				                                             "configValue": "1101044",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86287,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_INVALID_CURRENT_PASSWORD",
				                                             "configValue": "Invalid current password",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86288,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACCOUNT_LOCKED",
				                                             "configValue": "1101046",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86289,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACCOUNT_LOCKED",
				                                             "configValue": "Account is locked",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86290,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACCOUNT_NOT_ACTIVATED",
				                                             "configValue": "1101048",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86291,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACCOUNT_NOT_ACTIVATED",
				                                             "configValue": "Account is not activated",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86292,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_PASSWORD_EXPIRED",
				                                             "configValue": "1101049",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86293,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_PASSWORD_EXPIRED",
				                                             "configValue": "Password has expired and must be changed",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86294,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACCOUNT_ACTIVATED_ALREADY",
				                                             "configValue": "1101050",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86295,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACCOUNT_ACTIVATED_ALREADY",
				                                             "configValue": "Account has been activated already",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86296,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_PASSWORD_CANNOT_CHANGE",
				                                             "configValue": "1101054",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86297,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_PASSWORD_CANNOT_CHANGE",
				                                             "configValue": "Password cannot be changed at this time",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86298,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_PASSWORD_ALREADY_IN_HISTORY",
				                                             "configValue": "1101055",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86299,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_PASSWORD_ALREADY_IN_HISTORY",
				                                             "configValue": "Password already in the password history. Please choose another password",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86300,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_SECUREQA_NOT_MATCH",
				                                             "configValue": "1101056",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86301,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_SECUREQA_NOT_MATCH",
				                                             "configValue": "Security question answer does not match",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86302,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACTIVATE_CODE_INVALID",
				                                             "configValue": "1101057",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86303,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACTIVATE_CODE_INVALID",
				                                             "configValue": "Supplied activation code is invalid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86304,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACTIVATE_CODE_EXPIRED",
				                                             "configValue": "1101058",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86305,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACTIVATE_CODE_EXPIRED",
				                                             "configValue": "Activation Code has expired",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86306,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_PASSWORD_MATCH_CURRENT",
				                                             "configValue": "1101060",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86307,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_PASSWORD_MATCH_CURRENT",
				                                             "configValue": "The new password match with the current password",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86308,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACCOUNT_NEVER_ACTIVATED",
				                                             "configValue": "1101001",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86309,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACCOUNT_NEVER_ACTIVATED",
				                                             "configValue": "Account has never been activated",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64517,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_INVALID_PROPERTY_NAME",
				                                             "configValue": "1101318",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64518,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_INVALID_PROPERTY_NAME",
				                                             "configValue": "Invalid application property name",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64519,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_INVALID_PROPERTY_VALUE",
				                                             "configValue": "1101319",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64520,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_INVALID_PROPERTY_VALUE",
				                                             "configValue": "Application property value must not be null",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64521,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_DUPLICATE_PROPERTY_NAME",
				                                             "configValue": "1101320",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64522,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_DUPLICATE_PROPERTY_NAME",
				                                             "configValue": "Application property name already exists",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64524,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_LOGIN_NOT_FOUND",
				                                             "configValue": "1101000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64526,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_LOGIN_NOT_FOUND",
				                                             "configValue": "Account does not exist",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64527,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACCOUNT_DISABLED",
				                                             "configValue": "1101045",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64528,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACCOUNT_DISABLED",
				                                             "configValue": "Account is disabled",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64529,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_ACCOUNT_EXPIRED",
				                                             "configValue": "1101047",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64530,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_ACCOUNT_EXPIRED",
				                                             "configValue": "Account has expired",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64531,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_INVALID_LOGIN_ID",
				                                             "configValue": "1101051",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64532,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_INVALID_LOGIN_ID",
				                                             "configValue": "The Login ID is invalid",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64533,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_LOGIN_ID_ALREADY_EXISTS",
				                                             "configValue": "1101052",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64535,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_LOGIN_ID_ALREADY_EXISTS",
				                                             "configValue": "User with the same credentials already exists",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64536,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_PASSWORD_COMPLEXITY",
				                                             "configValue": "1101053",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64537,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_PASSWORD_COMPLEXITY",
				                                             "configValue": "The value provided for the password does not meet the length or complexity requirements",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64540,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_PROHIBITED_SECURE_ANSWER",
				                                             "configValue": "1101059",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64542,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_PROHIBITED_SECURE_ANSWER",
				                                             "configValue": "Prohibited security answer",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64543,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERCDE_APPPROPERTY_RETURN_MORE_ONE_LOGIN",
				                                             "configValue": "1101061",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64544,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.CIM_ERTXT_APPPROPERTY_RETURN_MORE_ONE_LOGIN",
				                                             "configValue": "Provided Application Properties should match against only one user",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34112,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.MAX_ACTIVATIONCODE_AGE",
				                                             "configValue": "3000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34113,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PREVENT_SECUREANSWERS_SAME_AS_LOGINID",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34114,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.TERMSANDCONDITIONSPOLICY.TCAUTOEXPIREDPERIOD",
				                                             "configValue": "10",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34115,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PREVENT_PASSWORD_SAME_AS_SECUREANSWERS",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34116,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PREVENT_PASSWORD_SAME_AS_LOGINID",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34117,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PASSWORDPOLICY.MAXPASSWORDREMEMBEREDAGE",
				                                             "configValue": "1000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34118,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.TCPOLICY.ALLOW_ANY_TCACCEPTED_TIME",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34119,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PASSWORDPOLICY.MAXPASSWORDREMEMBERED",
				                                             "configValue": "0",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34120,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PASSWORDPOLICY.MAXPASSWORDAGE",
				                                             "configValue": "1209600",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34121,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PASSWORDPOLICY.MINPASSWORDAGE",
				                                             "configValue": "1",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 34122,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000036.iptiQ.PASSWORDPOLICY. MAXPASSWORDREMEMBEREDAGE",
				                                             "configValue": "1209600",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 126,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.IFDS-WEB-PORTAL.TERMSANDCONDITIONSPOLICY.TCAUTOEXPIREDPERIOD",
				                                             "configValue": "10",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 127,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.IFDS-WEB-PORTAL.PREVENT_PASSWORD_SAME_AS_SECUREANSWERS",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 128,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.IFDS-WEB-PORTAL.PREVENT_PASSWORD_SAME_AS_LOGINID",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 129,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "validateUserPassword_v1_0.ALL.IFDS-WEB-PORTAL.PASSWORDPATTERN",
				                                             "configValue": "[\\x20-\\x7E\\xA3]{6,}",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "validateUserPassword_v1_0.000110.IFDS-WEB-PORTAL.DICTIONARYFILE_1",
				                                             "configValue": "C:\\tmp\\wrong-linux.words",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 131,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.ALL.GROUP-WEB.PASSWORDPOLICY.MAXPASSWORDREMEMBERED",
				                                             "configValue": "5",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 132,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.IFDS-WEB-PORTAL.PASSWORDPOLICY.MAXPASSWORDREMEMBEREDAGE",
				                                             "configValue": "1000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 91,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.GROUP-WEB.INCORRECTSECUREQALOCKOUTSTRATEGY.TEMPORARY.LOCKOUTDURATION",
				                                             "configValue": "3000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 96,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.ALL.IFDS-WEB-PORTAL.PASSWORDPOLICY.MAXPASSWORDAGE",
				                                             "configValue": "1209600",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 97,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.ALL.ALL.TERMSANDCONDITIONSPOLICY.TCAUTOEXPIREDPERIOD",
				                                             "configValue": "10",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.ALL.ALL.PREVENT_PASSWORD_SAME_AS_LOGINID",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 109,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.ALL.ALL.PREVENT_PASSWORD_SAME_AS_SECUREANSWERS",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 116,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.IFDS-WEB-PORTAL.PREVENT_SECUREANSWERS_SAME_AS_LOGINID",
				                                             "configValue": "true",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 54,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "activateUser_v1_0.000110.GROUP-WEB.MAX_FAILED_ACTIVATE_COUNT",
				                                             "configValue": "5",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 55,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "activateUser_v1_0.ALL.IFDS-WEB-PORTAL.MAX_FAILED_ACTIVATE_COUNT",
				                                             "configValue": "5",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 56,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "validateUserPassword_v1_0.000110.ALL.DICTIONARYFILE",
				                                             "configValue": "C:\\tmp\\linux.words",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 59,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "validateUserPassword_v1_0.000110.GROUP-WEB.PASSWORDPATTERN",
				                                             "configValue": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9\\W])[\\x20-\\x7E\\xA3]{8,}$",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "commonAccessControl_v1_0.000110.IFDS-WEB-PORTAL.MAX_ACTIVATIONCODE_AGE",
				                                             "configValue": "3000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 65,
				                                             "configName": "IFDS_BS_Support_Security_AccessControl",
				                                             "configKey": "createUser_v1_0.000110.IFDS-WEB-PORTAL.REQUIRE_ACTIVATE_AFTER_LOGIN_CHANGED",
				                                             "configValue": "false",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 138,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "ERCDE_USER_NOT_EXIST",
				                                             "configValue": "1101062",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 139,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "ERTXT_USER_NOT_EXIST",
				                                             "configValue": "User details do not exist for this client",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "ERCDE_MANDATORY_MISSING",
				                                             "configValue": "1101064",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 141,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "ERTXT_MANDATORY_MISSING",
				                                             "configValue": "Some mandatory data is missing from the user details for this client",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.FROM",
				                                             "configValue": "jupiter@investorportal.int",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 143,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEKEY[0]",
				                                             "configValue": "MCFullName",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 144,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[0].TYPE",
				                                             "configValue": "PT",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 145,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[0].VALUE",
				                                             "configValue": "Jupiter",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 146,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEKEY[1]",
				                                             "configValue": "ClientName",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 147,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[1].TYPE",
				                                             "configValue": "XP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 148,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[1].VALUE",
				                                             "configValue": "GetUserDetailsResponse/GetUserDetailsResponse/UserInformation/ExternalTitleRef| |GetUserDetailsResponse/GetUserDetailsResponse/UserInformation/Forename| |GetUserDetailsResponse/GetUserDetailsResponse/UserInformation/Surname",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 149,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEKEY[2]",
				                                             "configValue": "ActivationURL",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 150,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[2].TYPE",
				                                             "configValue": "XP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 151,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[2].VALUE",
				                                             "configValue": "ResetUserPasswordRequest/ResetUserPasswordRequest/ActivationURL|DeactivateUserResponse/DeactivateUserResponse/UserAccountActivation/ActivationCode",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 152,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEKEY[3]",
				                                             "configValue": "MCURL",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 153,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[3].TYPE",
				                                             "configValue": "PT",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 154,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.RESETPASSWORD.EMAILSETTING.TEMPLATEVALUE[3].VALUE",
				                                             "configValue": "http://www.jupiteram.com/myaccounttermsconditions",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 155,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.ACTIVATE_SMARTVALIDATION",
				                                             "configValue": "false",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 156,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.FROM",
				                                             "configValue": "jupiter@investorportal.int",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 157,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEKEY[0]",
				                                             "configValue": "MCFullName",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 158,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[0].TYPE",
				                                             "configValue": "PT",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 159,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[0].VALUE",
				                                             "configValue": "Jupiter",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 160,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEKEY[1]",
				                                             "configValue": "ClientName",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 161,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[1].TYPE",
				                                             "configValue": "XP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 162,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[1].VALUE",
				                                             "configValue": "GetClientResponse/GetClientResponse/PersonalClient/PersonalClientDetail/ExternalTitleRef| |GetClientResponse/GetClientResponse/PersonalClient/PersonalClientDetail/Forename| |GetClientResponse/GetClientResponse/PersonalClient/PersonalClientDetail/Surname",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 163,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEKEY[2]",
				                                             "configValue": "ActivationURL",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 164,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[2].TYPE",
				                                             "configValue": "XP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 165,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[2].VALUE",
				                                             "configValue": "RegisterUserRequest/RegisterUserRequest/ActivationURL|DeactivateUserResponse/DeactivateUserResponse/UserAccountActivation/ActivationCode",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 166,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEKEY[3]",
				                                             "configValue": "MCURL",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 167,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[3].TYPE",
				                                             "configValue": "PT",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 168,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.EMAILSETTING.TEMPLATEVALUE[3].VALUE",
				                                             "configValue": "http://www.liontrust.co.uk/AboutLiontrust/ImportantInformation/TermsConditions.aspx",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 169,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "ERTXT_PERSONAL_DETAIL_NOT_VALID",
				                                             "configValue": "Personal details do not validate",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 170,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "ERCDE_PERSONAL_DETAIL_NOT_VALID",
				                                             "configValue": "1101063",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 64516,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "ALL.GROUP-WEB.ACTIVATE_SMARTVALIDATION",
				                                             "configValue": "false",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 32950,
				                                             "configName": "IFDS_BS_Support_Security_Registration",
				                                             "configKey": "000110.IFDS-WEB-PORTAL.REGISTERUSER.REQUIRE_SESSION_ID",
				                                             "configValue": "false",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33583,
				                                             "configName": "IFDS_BS_Support_Security_Session",
				                                             "configKey": "login_v1_0.LDAP_ERCDE_USER_NO_ROLE",
				                                             "configValue": "1101002",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 33640,
				                                             "configName": "IFDS_BS_Support_Security_Session",
				                                             "configKey": "login_v1_0.LDAP_ERTXT_USER_NO_ROLE",
				                                             "configValue": "No role defined for the user.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140603,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140604,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140605,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140606,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140607,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddPortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140608,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddPortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140609,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddUserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140610,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.AddUserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140611,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceAddAggregateRequest",
				                                             "configValue": "1000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140612,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceAddAggregateResponse",
				                                             "configValue": "1000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140613,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceDepositRequest",
				                                             "configValue": "1000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140614,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceDepositResponse",
				                                             "configValue": "1000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140615,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140616,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140617,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAccountRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140618,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAccountResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140619,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAccountBeneficiaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140620,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAccountBeneficiaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140621,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140622,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140623,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140624,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceMaintainAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140625,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceWithdrawalRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140626,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.CommenceWithdrawalResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140627,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireAccountBeneficiaryListRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140628,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireAccountBeneficiaryListResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140629,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140630,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140631,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireLegislationRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140632,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireLegislationResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140633,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquirePortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140634,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquirePortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140635,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireTranslationOrdinarySummaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140636,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.EnquireTranslationOrdinarySummaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140637,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.GetAccountFeeListRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140638,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.GetAccountFeeListResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140639,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.GetPortfolioAccountListRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140640,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.GetPortfolioAccountListResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140641,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140642,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140643,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountBeneficiaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140644,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountBeneficiaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140645,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140646,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140647,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountInvestmentInstructionsRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140648,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountInvestmentInstructionsResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140649,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountRegularTransactionRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140650,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAccountRegularTransactionResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140651,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140652,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140653,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140654,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140655,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainPortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140656,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainPortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140657,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainUserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140658,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.MaintainUserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140659,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ProcessDepositRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140660,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ProcessDepositResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140661,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ProcessFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140662,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ProcessFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140663,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ProcessWithdrawalRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140664,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ProcessWithdrawalResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140665,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140666,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140667,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountBeneficiaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140668,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountBeneficiaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140669,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140670,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140671,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountRegularTransactionRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140672,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAccountRegularTransactionResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140673,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140674,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140675,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140676,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140677,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateDepositRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140678,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateDepositResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140679,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140680,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140681,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidatePortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140682,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidatePortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140683,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateTransactionFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140684,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateTransactionFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140685,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateWithdrawalRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140686,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.MessageType.ValidateWithdrawalResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140687,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140688,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140689,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140690,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140691,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddPortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140692,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddPortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140693,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddUserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140694,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.AddUserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140695,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceAddAggregateRequest",
				                                             "configValue": "1000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140696,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceAddAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140697,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceDepositRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140698,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceDepositResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140699,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140700,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140701,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAccountRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140702,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAccountResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140703,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAccountBeneficiaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140704,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAccountBeneficiaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140705,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140706,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140707,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140708,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceMaintainAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140709,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceWithdrawalRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140710,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.CommenceWithdrawalResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140711,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireAccountBeneficiaryListRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140712,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireAccountBeneficiaryListResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140713,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140714,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140715,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireLegislationRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140716,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireLegislationResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140717,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquirePortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140718,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquirePortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140719,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireTranslationOrdinarySummaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140720,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.EnquireTranslationOrdinarySummaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140721,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.GetAccountFeeListRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140722,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.GetAccountFeeListResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140723,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.GetPortfolioAccountListRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140724,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.GetPortfolioAccountListResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140725,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140726,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140727,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountBeneficiaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140728,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountBeneficiaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140729,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140730,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140731,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountInvestmentInstructionsRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140732,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountInvestmentInstructionsResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140733,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountRegularTransactionRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140734,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAccountRegularTransactionResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140735,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140736,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140737,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140738,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140739,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainPortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140740,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainPortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140741,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainUserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140742,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.MaintainUserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140743,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ProcessDepositRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140744,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ProcessDepositResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140745,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ProcessFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140746,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ProcessFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140747,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ProcessWithdrawalRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140748,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ProcessWithdrawalResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140749,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140750,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140751,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountBeneficiaryRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140752,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountBeneficiaryResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140753,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140754,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140755,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountRegularTransactionRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140756,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAccountRegularTransactionResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140757,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAdviserRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140758,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAdviserResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140759,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAggregateRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140760,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateAggregateResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140761,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateDepositRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140762,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateDepositResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140763,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140764,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140765,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidatePortfolioRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140766,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidatePortfolioResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140767,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateTransactionFeeRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140768,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateTransactionFeeResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140769,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateWithdrawalRequest",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140770,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.MessageType.ValidateWithdrawalResponse",
				                                             "configValue": "2000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140771,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeBDService_v1_0.PASSTHROUGH.ALIAS",
				                                             "configValue": "BLUEDOOR_HTTP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140772,
				                                             "configName": "IFDS_BS_Wealth_Passthrough",
				                                             "configKey": "invokeODService_v1_0.PASSTHROUGH.ALIAS",
				                                             "configValue": "OPENDOOR_HTTP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 8,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "SMTP.MONITORING_RECIPIENT_ADDRESS",
				                                             "configValue": "support@gmail.com",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 9,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "SMTP.MONITORING_SENDER_ADDRESS",
				                                             "configValue": "cimanager@gmail.com",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 10,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "SMTP.MONITORING_NOTIFICATION_MESSAGE",
				                                             "configValue": "[<![CDATA[",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 11,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "SMTP.MONITORING_NOTIFICTION_SUBJECT",
				                                             "configValue": "SMTP Error Notification by monitoring service",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 12,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "EMAIL_NOTIFICATION_RECIPIENT_ADDRESS",
				                                             "configValue": "[Any recipients we want to notify after System error occurs]",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 13,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "EMAIL_NOTIFICATION_SENDER_ADDRESS",
				                                             "configValue": "[Email address or Text notify the sender in email that notify Communication Service got error]",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 14,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "EMAIL_NOTIFICATION_MESSAGE",
				                                             "configValue": "[<![CDATA[",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 15,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "EMAIL_NOTIFICATION _SUBJECT",
				                                             "configValue": "Email transfer process was rejected. [MsgId: {4}]",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 16,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "EMAIL_ADDRESS_PATTERN",
				                                             "configValue": "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 17,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "SMTP.TRANSIENT_VERIFICATION_MODE_ENABLED",
				                                             "configValue": "false",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 18,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "SMTP.TRANSIENT_ERROR_LIST",
				                                             "configValue": "[Put SMTP transient error response codes such as 421,432,450]",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108331,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "REFERENCEDATA.CIM_ISOCOUNTRYCODE_REFERENCETYPE",
				                                             "configValue": "CIM_ISOCOUNTRYCODE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108332,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "REFERENCEDATA.PERCANA_ISOCOUNTRYCODE_REFERENCETYPE",
				                                             "configValue": "PERCANA_ISOCOUNTRYCODE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108333,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "REFERENCEDATA.CIM_LANGUAGE_REFERENCETYPE",
				                                             "configValue": "CIM_LANGUAGE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 108334,
				                                             "configName": "IFDS_Core",
				                                             "configKey": "REFERENCEDATA.PERCANA_LANGUAGE_REFERENCETYPE",
				                                             "configValue": "PERCANA_LANGUAGE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142275,
				                                             "configName": "IFDS_Core_Notification",
				                                             "configKey": "processNotificationEvents_v1_0.CONNECTION_ALIAS_NAME",
				                                             "configValue": "CORE_UMS_JMS_CONNECTION",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142276,
				                                             "configName": "IFDS_Core_Notification",
				                                             "configKey": "processNotificationEvents_v1_0.DESTINATION_NAME",
				                                             "configValue": "ifds.core.notification.NOTIFICATION_TOPIC",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142296,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:MFT",
				                                             "configValue": "MFT",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130242,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:ODMS_NS",
				                                             "configValue": "http://schemas.dstbluedoor.com/ODMS/2_8_0_0",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120238,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "REFERENCEDATA.CIM_PAYMENT_FREQUENCY_REFERENCETYPE",
				                                             "configValue": "CIM_PAYMENT_FREQUENCY",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120239,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "REFERENCEDATA.ALTUS_PAYMENT_FREQUENCY_REFERENCETYPE",
				                                             "configValue": "ALTUS_PAYMENT_FREQUENCY",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120240,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "MISS_CONFIG_KEY",
				                                             "configValue": "Missing configuration key {0}",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130254,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:AWD",
				                                             "configValue": "AWD",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140253,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:LEGACY",
				                                             "configValue": "LEGACY",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140255,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:ALFRESCO",
				                                             "configValue": "ALFRESCO",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 120234,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:ALTUS",
				                                             "configValue": "ALTUS",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140576,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "REFERENCEDATA.CIM_ISOCOUNTRYCODE_REFERENCETYPE",
				                                             "configValue": "CIM_ISOCOUNTRYCODE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 140577,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "REFERENCEDATA.ATG_ISOCOUNTRYCODE_REFERENCETYPE",
				                                             "configValue": "ATG_ISOCOUNTRYCODE",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 44515,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:EXPERIAN",
				                                             "configValue": "EXPERIAN",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 86503,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:ATG",
				                                             "configValue": "ATG",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 19,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:BLD",
				                                             "configValue": "BLD",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 20,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:ESB",
				                                             "configValue": "ESB",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 21,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:OPD",
				                                             "configValue": "OPD",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 20736,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:FAST",
				                                             "configValue": "FAST",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 20982,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "CACHE_MANAGER_NAME",
				                                             "configValue": "IFDS.Core",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 20983,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "CACHE_NAME",
				                                             "configValue": "ReferenceData",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 181,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:PCN",
				                                             "configValue": "PCN",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 183,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:LDAP",
				                                             "configValue": "LDAP",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 1,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "ERROR_INTERNAL_CODE",
				                                             "configValue": "0",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 2,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "ERROR_INTERNAL_TEXT",
				                                             "configValue": "Internal service exception. Please contact Administrator.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 3,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SMTP.HOST",
				                                             "configValue": "DST00148231.Thailand01.ifdsnet.int",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 4,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SMTP.PORT",
				                                             "configValue": "25",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 5,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SMTP.TIMEOUT",
				                                             "configValue": "60000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 6,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "GLOBAL_ERROR_CODE",
				                                             "configValue": "000000",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 7,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "GLOBAL_ERROR_TEXT",
				                                             "configValue": "Internal System Failure",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 142274,
				                                             "configName": "IFDS_ESB_GLOBAL",
				                                             "configKey": "SYSTEM_TYPE_CODE:FES",
				                                             "configValue": "FES",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130244,
				                                             "configName": "IFDS_Legacy_BS_Address",
				                                             "configKey": "experianLocateAddress_v1_0.CONVERT_COUNTRYCODE_FAILED_CODE",
				                                             "configValue": "1101323",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 130245,
				                                             "configName": "IFDS_Legacy_BS_Address",
				                                             "configKey": "experianLocateAddress_v1_0.CONVERT_COUNTRYCODE_FAILED_TEXT",
				                                             "configValue": "Failed to convert country code.",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 30982,
				                                             "configName": "IFDS_Legacy_BS_Quote",
				                                             "configKey": "CACHE_MANAGER_NAME",
				                                             "configValue": "IFDS.Legacy.Quote",
				                                             "sync": true
				                                          },
				                                                {
				                                             "configID": 30983,
				                                             "configName": "IFDS_Legacy_BS_Quote",
				                                             "configKey": "GENEREATEQUOTE_CACHE_NAME",
				                                             "configValue": "GenerateQuote",
				                                             "sync": false
				                                          }
				                                       ]}
				                                    }; 
		
		
		self.result = result.selectConfigurationOutput.results.map(function(item){
			item.status = item.sync?"sync":"out of sync";
			item.status.lableclass = item.sync?"label label-success":"label label-warning";
			return item;
	    });
		$scope.tableParams = new NgTableParams({}, { dataset:$scope.configs  });

		
		self.tableParams.settings({
	        dataset: self.result
	      });
	});

});

