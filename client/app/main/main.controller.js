'use strict';

angular.module('personalWebsiteApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    // $scope.awesomeThings = [];
    //
    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });
    //
    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };
    //
    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
    //
    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });

    // SVG JQuery animations
    setTimeout(function(){
      $scope.$apply(function() {
        var duration = 6000
        $('#phone-stroke1').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#phone-stroke2').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#phone-stroke3').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 500});
        $('#phone-stroke4').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1000});

        $('#tablet-stroke1').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#tablet-stroke2').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#tablet-stroke3').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1500});

        $('#mac-stroke1').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#mac-stroke2').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#mac-stroke3').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1000});
        $('#mac-stroke4').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1000});
      });
    });

    $scope.languages = [{
      title: "Swift",
      imageName: 'swift-list-icon.png',
      description: 'The most recent native iOS language which allows for a safer and more flexible codebase'
    }, {
      title: "Objective-C",
      imageName: 'objective-list-icon.png',
      description: 'The predecessor to Swift which most older SDKs and applications use for maintaining and updating code'
    }, {
      title: "MongoDB",
      imageName: 'mongodb-list-icon.png',
      description: 'A noSQL, schema-less database which allows for object-oriented database document storage and retrieval'
    }, {
      title: "Express",
      imageName: 'express-list-icon.png',
      description: 'A minimal and expressive Node.js framework which allows for easy routing and creation of consumable APIs'
    }, {
      title: "AngularJS",
      imageName: 'angular-list-icon.png',
      description: 'A front-end framework that allows for dynamic and reusable views with expressive, readable, and scalable code'
    }, {
      title: "Node.js",
      imageName: 'node-list-icon.png',
      description: 'An asynchronous, event driven framework that allows for scalable network applications requiring server connections'
    }]
  });
