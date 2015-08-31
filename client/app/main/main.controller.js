'use strict';

angular.module('personalWebsiteApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.languages = [{
      title: "AngularJS",
      class: 'angular-list'
    }, {
      title: "Express",
      class: 'express-list'
    }, {
      title: "Node.js",
      class: 'node-list'
    }, {
      title: "MongoDB",
      class: 'mongo-list'
    }, {
      title: "Swift",
      class: 'swift-list'
    }, {
      title: "Objective-C",
      class: 'objective-list'
    }]
  });
