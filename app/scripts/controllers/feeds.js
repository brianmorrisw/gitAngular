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
  	$http.get('feeds/fred-feeds.json').
  		success(function (data) {
  			$scope.feeds = data;
  			console.log('success');
  		});
  });