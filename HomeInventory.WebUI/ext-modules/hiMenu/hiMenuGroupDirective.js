"use strict";

angular.module("hiMenu").directive("hiMenuGroup", function () {
  return {
    require: '^hiMenu',
    transclude: true,
    scope: {
      label: '@',
      icon: '@'
    },
    templateUrl: 'ext-modules/hiMenu/hiMenuGroupTemplate.html',
    link: function (scope, el, attrs, ctrl) {
      scope.idOpen = false;
      scope.closeMenu = function () {
        scope.isOpen = false;
      };
      scope.clicked = function () {
        scope.isOpen = !scope.isOpen;

        if (el.parents('.hi-subitem-section').length == 0)
          scope.setSubmenuPosition();

        ctrl.setOpenMenuScope(scope);
      };

      scope.isVertical = function () {
        return ctrl.isVertical() || el.parents('.hi-subitem-section').length > 0;
      };

      scope.setSubmenuPosition = function () {
        var pos = el.offset();
        $('.hi-subitem-section').css({'left': pos.left + 20, 'top': 36})
      };
    }
  };
});