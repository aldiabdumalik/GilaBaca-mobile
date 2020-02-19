const ng = angular.module('ngApp', ['ngRoute']);
ng.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'view/home.html'
    })
    .when('/page', {
        templateUrl: 'view/page.html'
    })
    .otherwise({
        redirectTo: '/home'
    });
    // $locationProvider.html5Mode({enabled: true, requireBase: true});
    $locationProvider.hashPrefix('');
}]);
ng.controller('ngController', ['$scope', function ($scope) {
    
}]);