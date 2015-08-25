"use strict";
angular.module("hiMenu")
.directive("hiMenuItem", function () {
  return {
    require: '^hiMenu',
    scope: {
      label: '@',
      icon: '@',
      route: '@'
    },
    templateUrl: 'ext-modules/hiMenu/hiMenuItemTemplate.html',
    link: function (scope, el, attr, ctrl) {

      scope.isActive = function () {
        return el === ctrl.getActiveElement();
      }

      scope.isVertical = function()
      {
        return ctrl.isVertical() || el.parents('.hi-subitem-section').length > 0;
      }

      el.on('click', function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        scope.$apply(function () {
          ctrl.setActiveElement(el);
          ctrl.setRoute(scope.route);
        });

      });
    }
  }
});