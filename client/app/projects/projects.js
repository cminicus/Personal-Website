'use strict';

angular.module('personalWebsiteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
