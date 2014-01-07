/*global angular*/
(function (angular) {
  'use strict';

  function PracticeProposalsSearchCtrl($scope, $state, $stateParams, PracticeProposal) {

    $scope.newPracticeProposal = function () {
      $state.go('practiceProposals.new');
    };


    PracticeProposal.query($stateParams).$promise.then(function (practiceProposals) {
      $scope.practiceProposals = practiceProposals;
    });

    $scope.editPracticeProposal = function (practiceProposal) {
      $state.go(
        'practiceProposals.edit',
		{ practiceProposalId: practiceProposal.practiceProposalId }
      );
    };
  }
  
  PracticeProposalsSearchCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'PracticeProposal'
  ];

  angular.module('practiceProposals')
  .controller('PracticeProposalsSearchCtrl', PracticeProposalsSearchCtrl);
}(angular));
