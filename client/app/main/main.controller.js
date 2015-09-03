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
      description: 'The most recent native iOS language used to build most modern iOS applications'
    }, {
      title: "Objective-C",
      imageName: 'objective-list-icon.png',
      description: 'The predecessor to Swift that most applications still use'
    }, {
      title: "MongoDB",
      imageName: 'mongodb-list-icon.png',
      description: 'A noSQL database blah blah blah'
    }, {
      title: "Express",
      imageName: 'express-list-icon.png',
      description: 'A wrapper? class for Node.js which allows easy create of APIs and routes'
    }, {
      title: "AngularJS",
      imageName: 'angular-list-icon.png',
      description: 'A front end framework used to expidite web development and create a MVC'
    }, {
      title: "Node.js",
      imageName: 'node-list-icon.png',
      description: 'What should I even put here lol. It\'s important stuff'
    }]
  });
