'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:RecentCtrl
 * @description
 * # RecentCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('RecentCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
