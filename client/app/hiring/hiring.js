'use strict';

angular.module('personalWebsiteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/hiring', {
        templateUrl: 'app/hiring/hiring.html',
        controller: 'HiringCtrl'
      });
  });
