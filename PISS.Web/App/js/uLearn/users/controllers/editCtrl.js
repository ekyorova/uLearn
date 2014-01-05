/*global angular*/
(function (angular) {
  'use strict';
  
  function UsersEditCtrl(
    $q,
    $scope,
    $filter,
    $state,
    $stateParams,
    User,
    Role
  ) {
    var userExistsPromise;

    if ($stateParams.userId) {
      $scope.isEdit = true;
      $scope.user = User.get({userId: $stateParams.userId});
    } else {
      $scope.isEdit = false;
      $scope.user = new User();
      $scope.user.$promise = $q.when($scope.user);
    }
    $scope.roles = Role.query();
    $scope.saveClicked = false;
    $scope.type = undefined;
    $scope.a = 1;
    $scope.$watch('type', function() {
      $scope.a = 2;
    });
    $scope.types = [
      {id:2, text: 'Студент'},
      {id:3, text: 'Докторант'},
      {id:4, text: 'Преподавател'}
    ];
    $scope.titles = [
      {id:1, text: 'Асистент'},
      {id:2, text: 'Главен асистент'},
      {id:3, text: 'Доцент'},
      {id:4, text: 'Професор'},
      {id:5, text: 'Академик'}
    ];
    $scope.departments = [
      {id:1, text: 'Математика'},
      {id:2, text: 'Информатика'}
    ];
    
    $q.all({
      user: $scope.user.$promise,
      roles: $scope.roles.$promise
    }).then(function (res) {
      res.roles.forEach(function (role) {
        role.selected =
          $filter('filter')(res.user.roles || [], {roleId: role.roleId}).length > 0;
      });
      $scope.password = '';
      $scope.confirmPassword = '';
    });

    $scope.save = function () {
      $scope.saveClicked = true;

      if ($scope.userForm.$valid && $scope.password === $scope.confirmPassword) {
        if ($scope.setPassword) {
          $scope.user.password = $scope.password;
        } else {
          $scope.user.password = '';
        }
        
        if ($scope.setCertificate) {
          $scope.user.certificateThumbprint = $scope.certificate;
        } else {
          $scope.user.certificateThumbprint = '';
        }
        
        $scope.user.roles = $filter('filter')($scope.roles, {selected: true});
        
        if ($scope.isEdit) {
          userExistsPromise = $q.when(false);
        } else {
          userExistsPromise =
            User.query({username: $scope.user.username, exact: true})
            .$promise
            .then(function (users) {
              return users.length > 0;
            });
        }

        userExistsPromise.then(function (exists) {
          $scope.userExists = exists;
          if (!exists) {
            $scope.user.$save().then(function () {
              $state.go('users.search');
            });
          }
        });
      }
    };

    $scope.cancel = function () {
      $state.go('users.search');
    };
  }
  
  UsersEditCtrl.$inject = [
    '$q',
    '$scope',
    '$filter',
    '$state',
    '$stateParams',
    'User',
    'Role'
  ];
  
  angular.module('users').controller('UsersEditCtrl', UsersEditCtrl);
}(angular));
