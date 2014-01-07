/*global angular*/
(function (angular) {
  'use strict';
  angular.module('practiceRatings', [
    'ng',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'navigation',
    'practiceRatings.templates',
    'l10n',
    'l10n-tools'
  ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state({
        name: 'practiceRatings',
        title: 'Оценка на стаж ',
        url: '/practiceRatings?username&fullname&showActive',
        parent: 'root',
        'abstract': true
      })
      .state({
        name: 'practiceRatings.search',
        parent: 'practiceRatings',
        url: '',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/practiceRatings/templates/search.html',
            controller: 'PracticeRatingsSearchCtrl'
          }
        }
      })
      .state({
        name: 'practiceRatings.new',
        title: 'Нова оценка на стаж',
        parent: 'practiceRatings',
        url: '/new',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/practiceRatings/templates/edit.html',
            controller: 'PracticeRatingsEditCtrl'
          }
        }
      })
      .state({
        name: 'practiceRatings.edit',
        title: 'Редакция',
        parent: 'practiceRatings',
        url: '/:practiceRatingId',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/practiceRatings/templates/aprove.html',
            controller: 'PracticeRatingsEditCtrl'
          }
        }
      });
  }]);
}(angular));
