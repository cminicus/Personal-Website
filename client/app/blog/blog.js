'use strict';

angular.module('personalWebsiteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      });
  });
