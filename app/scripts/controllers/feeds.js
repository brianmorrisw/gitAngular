'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:FeedsCtrl
 * @description
 * # FeedsCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('FeedsCtrl', function ($http, $scope) {
  	$http.get('feeds/user.json').
  		success(function (data) {
  			$scope.users = data;
  			console.log('success');
  		});
  });
