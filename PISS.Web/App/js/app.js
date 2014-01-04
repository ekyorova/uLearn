/*global angular*/
(function (angular) {
  'use strict';
  angular.module('app', [
    'ng',
    'ui.router',
    'ui.select2',
    'navigation',
    'scaffolding',
    'users',
    'diplomaWorkProposals',
    'l10n',
    'l10n-tools',
    'l10nTexts_bg-bg'
  ]).config([
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    'NavigationConfigProvider',
    function (
      $urlRouterProvider,
      $stateProvider,
      $locationProvider,
      navigationConfigProvider
    ) {
      $locationProvider.html5Mode(false);
      $urlRouterProvider.otherwise('/users');

      navigationConfigProvider
        .addItem({ text: 'navbar.diplomaWork', url: '/diplomaWork', items: [
          { text: 'navbar.diplomaWorkProposals', state: 'diplomaWorkProposals.search' },
          { text: 'navbar.diplomaWorkReviews', url: '/reviews' }
        ]})
        .addItem({ text: 'navbar.probationPractices', url: '/probationPractices', items: [
          { text: 'navbar.probationPracticeProposals', url: '/probationPractices' },
          { text: 'navbar.probationPracticeGrades', url: '/probationPracticeGrades' }
        ]})
        .addItem({ text: 'navbar.phds', url: '/phDs', items: [
          { text: 'navbar.commonWorkPlan', url: '/commonWorkPlans' },
          { text: 'navbar.individualPlan', url: '/individualPlans' },
          { text: 'navbar.anualWrokPlan', url: '/anualWorkPlans' }
        ]})
        .addItem({ text: 'navbar.admin', icon: 'glyphicon-cog', items: [
          { text: 'navbar.users', state: 'users.search' }
        ]})
        .addItem({ text: 'navbar.reports', url: '/reports' })
        .setUserFullName('GaniBani')
        .setUserHasPassword(true)
        .showBreadcrumbBar(true);
    }
  ]).run(['l10n', '$rootScope', function (l10n, $rootScope) {
    $rootScope.l10n = l10n;
  }]);
}(angular));
