'use strict';

angular.module('personalWebsiteApp')
  .controller('BlogCtrl', function ($scope) {

    $scope.posts = [{
      title: 'Blog 1',
      date: 'October 15th 2015',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      color: '#34495E'
    }, {
      title: 'Blog 2',
      date: 'November 15th 2015',
      description: 'A short description about all of my projects that I\'ve worked on because I\'m that chill',
      color: '#674172'
    }, {
      title: 'Blog 3',
      date: 'December 15th 2015',
      description: 'A short description about all of my projects that I\'ve worked on because I\'m that chill',
      color: '#96281B'
    }];

  });
