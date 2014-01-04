// Usage: <sc-text-area ng-model="<model_name>"></sc-text-area>

/*global angular*/
(function (angular) {
  'use strict';

  function TextAreaDirective() {
    return {
      priority: 110,
      restrict: 'E',
      replace: true,
      templateUrl: 'scaffolding/directives/textArea/textAreaDirective.html'
    };
  }

  angular.module('scaffolding').directive('scTextArea', TextAreaDirective);
}(angular));