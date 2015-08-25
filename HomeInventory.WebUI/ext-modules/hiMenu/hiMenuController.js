"use strict";
angular.module("hiMenu")
  .controller("hiMenuController", ['$scope', '$rootScope',
    function ($scope, $rootScope) {

      $scope.isVertical = true;

      this.getActiveElement = function () {
        return $scope.activeElement;
      };

      this.setActiveElement = function (el) {
        $scope.activeElement = el;
      }

      this.setRoute = function (route) {
        $rootScope.$broadcast('hi-menu-item-selected-event', { route: route });
      };

      this.isVertical = function () {
        return $scope.isVertical;
      }

      this.setOpenMenuScope = function(scope)
      {
        $scope.openMenuScope = scope;
      }

      $scope.toggleMenuOrientation = function () {
        //close any open menu
        if ($scope.openMenuScope)
          $scope.openMenuScope.closeMenu();

        $scope.isVertical = !$scope.isVertical;
        $rootScope.$broadcast('hi-menu-orientation-changed-event',
          { isMenuVertical: $scope.isVertical });
      };

      angular.element(document).bind('click', function (e) {
        if ($scope.openMenuScope && !$scope.isVertical) {
          if ($(e.target).parent().hasClass('hi-selectable-item'))
            return;
          $scope.$apply(function () {
            $scope.openMenuScope.closeMenu();
          });
          e.preventDefault();
          e.stopPropagation();
        }
      });

      $scope.$on('hi-menu-show', function (event, data) {
        $scope.showMenu = data.show;
      });
    }]);