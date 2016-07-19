app = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'material.svgAssetsCache']);

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log, $location) {
  var imagePath = 'img/list/60.jpeg';
  $scope.toggleLeft = buildToggler('left');
  $scope.isOpenLeft = function() {
    return $mdSidenav('left').isOpen();
  };

  $scope.go = function(path) {
    $location.path(path);
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

//app.controller('AuditLogCtrl', function ($scope) { 
//	$scope.user = {
//		      title: 'Developer',
//		      email: 'ipsum@lorem.com',
//		      firstName: '',
//		      lastName: '',
//		      company: 'Google',
//		      address: '1600 Amphitheatre Pkwy'
//	}
//	
//});
app.controller('ConfigurationCtrl', function ($scope) {});
app.controller('ReferenceDataCtrl', function ($scope) {});
app.controller('HomeCtrl', function ($scope) {});

app.config(function($routeProvider) {

  $routeProvider
    .when('/auditlog', {
      templateUrl: 'auditlog.html',
      controller: 'AuditLogCtrl'
    })
    .when('/configuration', {
      templateUrl: 'configuration.html',
      controller: 'ConfigurationCtrl'
    })
    .when('/referencedata', {
      templateUrl: 'referencedata.html',
      controller: 'ReferenceDataCtrl'
    })
    .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });

  // $routeProvider.otherwise({
  //   redirectTo: '/'
  // });
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