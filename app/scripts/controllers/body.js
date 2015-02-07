'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:BodyCtrl
 * @description
 * # BodyCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('BodyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
