// Use this file to *create* an AngularJS module for your app and configure $routeProvider.

/// <reference path="refs.ts" />

module auction {

    'use strict';

    angular.module('auctionApp', ['ngRoute'])
        .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/home', { templateUrl: 'views/home.html', controller: 'HomeController'})
                .when('/search', { templateUrl: 'views/search.html', controller: 'SearchController'})
                .otherwise({ redirectTo: '/home'});
        }]);

}