'use strict';

angular.module('personalWebsiteApp')
  .controller('ProjectsCtrl', function ($scope) {

    setTimeout(function(){
      $scope.$apply(function() {
        var duration = 6000
        $('#project-outline1').velocity({ 'stroke-dashoffset': 0 }, {duration: duration - 1500, delay: 0});
        $('#project-outline2').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#project-outline3').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#project-outline4').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});

        $('#project-circle1').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 0});
        $('#project-circle2').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 100});
        $('#project-circle3').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 200});
        $('#project-circle4').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 300});
        $('#project-circle5').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 400});
        $('#project-circle6').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 500});

        $('#project-side1').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 10});
        $('#project-side2').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1100});
        $('#project-side3').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1400});
        $('#project-side4').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1200});
        $('#project-side5').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1500});
        $('#project-side6').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1300});
        $('#project-side7').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1600});
        $('#project-side8').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1900});
        $('#project-side9').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1800});
        $('#project-side10').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1700});

        $('#project-main1').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 800});
        $('#project-main2').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1550});
        $('#project-main3').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 900});
        $('#project-main4').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 800});
        $('#project-main5').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 700});
        $('#project-main6').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1100});
        $('#project-main7').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1600});
        $('#project-main8').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1000});
        $('#project-main9').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 900});
        $('#project-main11').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 2000});
        $('#project-main12').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1100});
        $('#project-main13').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1900});
        $('#project-main14').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1400});
        $('#project-main15').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1300});
        $('#project-main16').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1700});
        $('#project-main17').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1700});
        $('#project-main18').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 2000});
        $('#project-main19').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1800});
        $('#project-main20').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1700});
        $('#project-main21').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1900});
        $('#project-main22').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 900});
        $('#project-main23').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 2100});
        $('#project-main24').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 2100});
        $('#project-main25').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1200});
        $('#project-main26').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1300});
        $('#project-main27').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1300});
        $('#project-main28').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1400});
        $('#project-main29').velocity({ 'stroke-dashoffset': 0 }, {duration: duration, delay: 1700});

      });
    });

    $scope.projects = [{
      title: 'SideGuide',
      backgroundColor: '#32a768',
      image: 'image-name',
      highlights: [
      {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }]
    }, {
      title: 'JHU News-Letter',
      backgroundColor: '#32a768',
      image: 'image-name',
      highlights: [
      {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }]
    }, {
      title: 'Nessie',
      backgroundColor: '#32a768',
      image: 'image-name',
      highlights: [
      {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }, {
        icon: 'icon-name',
        title: 'GPS',
        description: 'Used blah to blah on the blah'
      }]
    }]

  });
