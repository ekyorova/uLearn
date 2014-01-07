/*global angular*/
(function (angular) {
  'use strict';

  function DiplomaWorkProposalsSearchCtrl($scope, $state, $stateParams, DiplomaWorkProposal) {

    $scope.newDiplomaWorkProposal = function () {
      $state.go('diplomaWorkProposals.new');
    };


    DiplomaWorkProposal.query($stateParams).$promise.then(function (diplomaWorkProposals) {
      $scope.diplomaWorkProposals = diplomaWorkProposals;
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
}(angular));
