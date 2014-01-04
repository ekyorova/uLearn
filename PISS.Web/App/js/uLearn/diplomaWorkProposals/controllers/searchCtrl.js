/*global angular, _*/
(function (angular, _) {
  'use strict';

  function DiplomaWorkProposalsSearchCtrl($scope, $state, $stateParams, DiplomaWorkProposal) {
    $scope.filters = {
      username: null //always show the username filter
    };

    _.forOwn($stateParams, function(value, param) {
      if (value !== null && value !== undefined) {
        $scope.filters[param] = value;
      }
    });

    $scope.newDiplomaWorkProposal = function () {
      $state.go('diplomaWorkProposals.new');
    };


    DiplomaWorkProposal.query($stateParams).$promise.then(function (diplomaWorkProposals) {
      $scope.diplomaWorkProposals = diplomaWorkProposals.map(function (diplomaWorkProposals) {
        return {
          diplomaWorkProposalId: diplomaWorkProposals.diplomaWorkProposalId,
          subject: diplomaWorkProposals.subject,
          anotation: diplomaWorkProposals.anotation,
          goal: diplomaWorkProposals.goal,
          problems: diplomaWorkProposals.problems,
          limitation: diplomaWorkProposals.limitation,
          term: diplomaWorkProposals.term
        };
      });
    });

    $scope.editDiplomaWorkProposal = function (diplomaWorkProposal) {
      $state.go(
        'diplomaWorkProposals.edit',
		{ diplomaWorkProposalId: diplomaWorkProposal.diplomaWorkProposalId }
      );
    };
  }
  
  DiplomaWorkProposalsSearchCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'DiplomaWorkProposal'
  ];

  angular.module('diplomaWorkProposals')
  .controller('DiplomaWorkProposalsSearchCtrl', DiplomaWorkProposalsSearchCtrl);
}(angular, _));
