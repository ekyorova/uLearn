/*global angular, _*/
(function (angular, _) {
  'use strict';

  function UsersSearchCtrl($scope, $state, $stateParams, User) {

    $scope.newUser = function () {
      $state.go('users.new');
    };

    User.query($stateParams).$promise.then(function (users) {
      $scope.users = users;
    });

    $scope.editUser = function (user) {
      $state.go('users.edit', { userId: user.userId });
    };
  }
  
  UsersSearchCtrl.$inject = ['$scope', '$state', '$stateParams', 'User'];

  angular.module('users').controller('UsersSearchCtrl', UsersSearchCtrl);
}(angular, _));
