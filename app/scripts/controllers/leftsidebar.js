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
  	$http.get('feeds/user-details/fred.json').
  		success(function (data) {
  			$scope.owner = data;
  			console.log('success owner');
  		});
  });
