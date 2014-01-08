/*global angular*/
(function (angular) {
  'use strict';
  angular.module('practiceProposals', [
    'ng',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'navigation',
    'practiceProposals.templates',
    'l10n',
    'l10n-tools'
  ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state({
        name: 'practiceProposals',
        title: 'Предложения за стаж ',
        url: '/practiceProposals?username&fullname&showActive',
        parent: 'root',
        'abstract': true
      })
      .state({
        name: 'practiceProposals.search',
        parent: 'practiceProposals',
        url: '',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/practiceProposals/templates/search.html',
            controller: 'PracticeProposalsSearchCtrl'
          }
        }
      })
      .state({
        name: 'practiceProposals.new',
        title: 'Ново предложение за стаж',
        parent: 'practiceProposals',
        url: '/new',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/practiceProposals/templates/edit.html',
            controller: 'PracticeProposalsEditCtrl'
          }
        }
      })
      .state({
        name: 'practiceProposals.edit',
        title: 'Преглед',
        parent: 'practiceProposals',
        url: '/:practiceProposalId',
        views: {
          'pageView@root': {
            templateUrl: 'uLearn/practiceProposals/templates/aprove.html',
            controller: 'PracticeProposalsEditCtrl'
          }
        }
      });
  }]);
}(angular));
