/*global angular*/
(function (angular) {
  'use strict';
  angular.module('app').config(function ($httpBackendConfiguratorProvider) {
    var roles = [{
        roleId: 1,
        name: 'Role1'
      }, {
        roleId: 2,
        name: 'Role2'
      }],
      users = [{
        userId: 1,
        username: 'dkaludov',
        firstName: 'Димитър',
        secondName: 'Красимиров',
        lastName: 'Калудов',
        phone: '0883413535',
        email: 'mitakyt@gmail.com',
        address: 'Варна',
        type: {
          id: 2,
          text: 'Студент'
        },
        facultyNumber: '61348',
        course: 'Софтуерно Инженерство',
        department: null,
        title: null
      }, {
        userId: 2,
        username: 'admin',
        firstName: 'Владо',
        secondName: 'Владов',
        lastName: 'Бабев',
        phone: null,
        email: null,
        address: null,
        type: {
          id: 4,
          text: 'Преподавател'
        },
        facultyNumber: null,
        course: null,
        department: {
          id: 1,
          text: 'Математика'
        },
        title: {
          id: 3,
          text: 'Доцент'
        }
      }],
      nextUserId = 3;

    $httpBackendConfiguratorProvider
      .when('GET', '/api/users?username&fullname&showActive&exact',
        function ($params, $filter) {
          return [
            200,
            $filter('filter')(users, {
              username: $params.username,
              fullname: $params.fullname,
              isActive: $params.showActive
            })
          ];
        })
      .when('GET', '/api/users/:userId',
        function ($params, $filter) {
          var userId = parseInt($params.userId, 10),
            user = $filter('filter')(users, {userId: userId})[0];

          if (!user) {
            return [400];
          }

          return [200, user];
        })
      .when('POST', '/api/users/:userId',
        function ($params, $jsonData, $filter) {
          var userId = parseInt($params.userId, 10),
            userIndex = users.indexOf($filter('filter')(users, {userId: userId})[0]);

          if (userIndex === -1) {
            return [400];
          }
          users[userIndex] = $jsonData;
          
          return [200];
        })
      .when('POST', '/api/users',
        function ($params, $jsonData) {
          if (!$jsonData || $jsonData.userId) {
            return [400];
          }

          $jsonData.userId = ++nextUserId;
          $jsonData.hasPassword = $jsonData.password !== undefined && $jsonData.password !== '';
          users.push($jsonData);
          
          return [200];
        })
      .when('GET', '/api/roles',
        function () {
          return [200, roles];
        });
  });
}(angular));
