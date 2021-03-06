'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('PopularCtrl', function ($http, $scope) {
    $http.get('feeds/frontpage/popular-posts.json').
  		success(function (data) {
  			$scope.frontpage = data;
  			console.log('success frontpage');
  		});
  });