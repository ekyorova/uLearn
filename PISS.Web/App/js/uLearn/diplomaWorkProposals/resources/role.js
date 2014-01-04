/*global angular*/
(function (angular) {
  'use strict';

  angular.module('diplomaWorkProposals').factory('Role', ['$resource', function ($resource) {
    return $resource('/api/roles');
  }]);
}(angular));
