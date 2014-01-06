/*global angular*/
(function (angular) {
  'use strict';
  angular.module('diplomaWorkReviews', [
    'ng',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'navigation',
    'diplomaWorkReviews.templates',
    'l10n',
    'l10n-tools'
  ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state({
        name: 'diplomaWorkReviews',
        title: 'Рцензия на дипломна работа',
        url: '/diplomaWorkReviews',
        parent: 'root',
        'abstract': true
      })
      .state({
        name: 'diplomaWorkReviews.search',
        parent: 'diplomaWorkReviews',
        url: '',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/diplomaWorkReviews/templates/search.html',
            controller: 'DiplomaWorkReviewsSearchCtrl'
          }
        }
      })
      .state({
        name: 'diplomaWorkReviews.new',
        title: 'Нова рецензия на дипломна работа',
        parent: 'diplomaWorkReviews',
        url: '/new',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/diplomaWorkReviews/templates/new.html',
            controller: 'DiplomaWorkReviewsEditCtrl'
          }
        }
      })
      .state({
        name: 'diplomaWorkReviews.view',
        title: 'Преглед',
        parent: 'diplomaWorkReviews',
        url: '/:diplomaWorkReviewId',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/diplomaWorkReviews/templates/view.html',
            controller: 'DiplomaWorkReviewsEditCtrl'
          }
        }
      });
  }]);
}(angular));
