'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($http, $scope) {
  	$http.get('feeds/frontpage/popular-posts.json').
  		success(function (data) {
  			$scope.frontpage = data;
  			console.log('success frontpage');
  		});
  });