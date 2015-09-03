'use strict';

angular.module('personalWebsiteApp')
  .controller('FooterCtrl', function ($scope) {
    // Always make sure date is updated
    var date = new Date();
    $scope.year = date.getFullYear();
  });
