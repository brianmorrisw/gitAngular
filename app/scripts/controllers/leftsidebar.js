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
  	$http.get('feeds/fred-feeds.json').
  		success(function (data) {
  			$scope.feeds = data;
  			console.log('success');
  		});
  });