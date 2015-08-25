"use strict";
angular.module("hiFramework").directive("hiFramework", function () {
  return {
    transclude: true,
    restrict: "EA",
    scope: {
      title: "@",
      subTitle: "@",
      iconFile: "@"
    },
    templateUrl: "ext-modules/hiFramework/hiFrameworkTemplate.html",
    controller: 'hiFrameworkController'
  }
});