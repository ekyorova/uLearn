/*global angular*/
(function (angular) {
  'use strict';
  
  function PracticeProposalsEditCtrl(
    $q,
    $scope,
    $filter,
    $state,
    $stateParams,
    PracticeProposal
  ) {
    if ($stateParams.practiceProposalId) {
      $scope.practiceProposal = PracticeProposal
      .get({practiceProposalId: $stateParams.practiceProposalId});
    } else {
      $scope.isEdit = false;
      $scope.practiceProposal = new PracticeProposal();
      $scope.practiceProposal.$promise =$q.when(
        $scope.practiceProposal
      );
    }
    $scope.saveClicked = false;
    

    $scope.save = function () {
      $scope.saveClicked = true;

      if ($scope.practiceProposalForm.$valid) {
        $scope.practiceProposal.$save().then(function () {
          $state.go('practiceProposals.search');
        });
      }
    };

    $scope.cancel = function () {
      $state.go('practiceProposals.search');
    };
  }
  
  PracticeProposalsEditCtrl.$inject = [
    '$q',
    '$scope',
    '$filter',
    '$state',
    '$stateParams',
    'PracticeProposal'
  ];
  
  angular.module('practiceProposals')
  .controller('PracticeProposalsEditCtrl', PracticeProposalsEditCtrl);
}(angular));
