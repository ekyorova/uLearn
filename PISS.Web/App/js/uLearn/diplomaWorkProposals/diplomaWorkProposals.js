/*global angular*/
(function (angular) {
  'use strict';
  angular.module('diplomaWorkProposals', [
    'ng',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'navigation',
    'diplomaWorkProposals.templates',
    'l10n',
    'l10n-tools'
  ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state({
        name: 'diplomaWorkProposals',
        title: 'Предложения за дипломна работа',
        url: '/diplomaWorkProposals?username&fullname&showActive',
        parent: 'root',
        'abstract': true
      })
      .state({
        name: 'diplomaWorkProposals.search',
        parent: 'diplomaWorkProposals',
        url: '',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/diplomaWorkProposals/templates/search.html',
            controller: 'DiplomaWorkProposalsSearchCtrl'
          }
        }
      })
      .state({
        name: 'diplomaWorkProposals.new',
        title: 'Ново предложение за дипломна работа',
        parent: 'diplomaWorkProposals',
        url: '/new',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/diplomaWorkProposals/templates/edit.html',
            controller: 'DiplomaWorkProposalsEditCtrl'
          }
        }
      })
      .state({
        name: 'diplomaWorkProposals.edit',
        title: 'Редакция',
        parent: 'diplomaWorkProposals',
        url: '/:diplomaWorkProposalId',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/diplomaWorkProposals/templates/aprove.html',
            controller: 'DiplomaWorkProposalsEditCtrl'
          }
        }
      });
  }]);
}(angular));
