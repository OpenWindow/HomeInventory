"use strict";
angular.module("hiMenu")
.directive("hiMenu", function () {
  return {
    transclude: true,
    restrict: 'EA',
    scope: {},
    templateUrl: 'ext-modules/hiMenu/hiMenuTemplate.html',
    controller: 'hiMenuController',
    link: function (scope, el, attr) {

    }
  }
});