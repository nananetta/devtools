app = angular.module('MyApp', [ 'ngMaterial', 'ngMessages', 'ngRoute',
		'material.svgAssetsCache', 'sticky', 'ngTable', 'ngResource',
		'ngAnimate', 'angular-loading-bar', 'angularTreeview' ]);

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log, $location) {
  var imagePath = 'img/list/60.jpeg';
  $scope.toggleLeft = buildToggler('left');
  $scope.isOpenLeft = function() {
    return $mdSidenav('left').isOpen();
  };

  $scope.go = function(path) {
    $location.path(path);
    $scope.title = path;
    $mdSidenav('left').close()
  };

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          // $log.debug("toggle " + navID + " is done");
        });
    }
  }
});

app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('left').close()
      .then(function() {
        // $log.debug("close LEFT is done");
      });
  };
});

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;
  }])


app.controller('HomeCtrl', function ($scope) {});

app.config(function($routeProvider) {

  $routeProvider
    .when('/Audit Log', {
      templateUrl: 'auditlog.html',
      controller: 'AuditLogCtrl'
    })
    .when('/Configuration', {
      templateUrl: 'configuration.html',
      controller: 'ConfigurationCtrl'
    })
    .when('/Reference Data', {
      templateUrl: 'referencedata.html',
      controller: 'ReferenceDataCtrl'
    })
    .when('/Service Dependency', {
      templateUrl: 'dependency.html',
      controller: 'DependencyCtrl'
    })
    .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
  // configure html5 to get links working on jsfiddle  
//  $locationProvider.html5Mode({
//    enabled: true,
//    requireBase: false
//  });

});

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