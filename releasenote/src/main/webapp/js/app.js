app = angular.module('MyApp', [ 'ngMaterial', 'ngMessages', 'ngRoute',
		'material.svgAssetsCache', 'sticky', 'ngTable', 'ngResource',
		'ngAnimate', 'angular-loading-bar' ]);

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log, $location) {

});

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;
  }])


app.controller('HomeCtrl', function ($scope) {});

app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('docs-dark', 'default')
	.primaryPalette('yellow')
	.dark();

});

app.directive('emptyToNull', function() {
    return {
    	restrict : 'A',
    	require : 'ngModel',
    	link : function(scope, elem, attrs, ctrl) {
    	    ctrl.$parsers.push(function(viewValue) {
    		if (viewValue === "") {
    		    return null;
    		}
    		return viewValue;
    	    });
    	}
        };
    })