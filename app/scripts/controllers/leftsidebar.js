'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:LeftsidebarCtrl
 * @description
 * # LeftsidebarCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('LeftsidebarCtrl', function ($http, $scope) {
  	$http.get('feeds/feed.json').
  		success(function (data) {
  			$scope.users = data;
  			console.log('success users');
  		});
  	$http.get('feeds/user-details.json').
  		success(function (details) {
  			$scope.owner = details;
  			console.log('success user details');
  		});
  });
