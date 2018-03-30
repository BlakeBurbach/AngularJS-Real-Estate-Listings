const ListingsApp = angular.module('ListingsApp', ['ngRoute']);

ListingsApp.config(function($routeProvider){
    console.log('config loaded');

    $routeProvider
    .when('/purchase', {
        templateUrl: '/views/purchase.html',
        controller: 'PurchaseController as vm'
    })
    .when('/rental', {
        templateUrl: '/views/rental.html',
        controller: 'RentalController as vm'
    })
    .otherwise(
        { redirectTo: '/purchase'}
    );
});