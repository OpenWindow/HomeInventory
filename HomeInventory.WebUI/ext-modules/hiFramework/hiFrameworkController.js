"use strict";

angular.module("hiFramework")
  .controller("hiFrameworkController", ['$scope', '$window', '$timeout','$rootScope','$location',
    function ($scope, $window, $timeout, $rootScope, $location) {

      $scope.isMenuVisible = true;
      $scope.isMenuButtonVisible = true;
      $scope.isMenuVertical = true;

      $scope.$on('hi-menu-item-selected-event', function (evt, data) {
        $location.path(data.route);

        $scope.routeString = data.route;
        checkWidth();
        broadcastMenuState();
      });
      
      $scope.$on('hi-menu-orientation-changed-event', function (evt, data) {
        $scope.isMenuVertical = data.isMenuVertical;
      });

      $($window).on('resize.hiFramework', function () {
        $scope.$apply(function () {
          checkWidth();
          broadcastMenuState();
        });
      });

      $scope.$on("$destroy", function () {
        $($window).off("resize.hiFramework");
      });

      var checkWidth = function () {
        var width = Math.max($($window).width(), $window.innerWidth);
        $scope.isMenuVisible = (width > 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
      };

      $timeout(function () {
        checkWidth();
        broadcastMenuState();
      }, 0);

      $scope.menuButtonClicked = function () {
        $scope.isMenuVisible = !$scope.isMenuVisible;
        broadcastMenuState();
        $scope.$apply();
      };

      var broadcastMenuState = function () {
        $rootScope.$broadcast('hi-menu-show', {
          show: $scope.isMenuVisible
        });
      };

    }]);