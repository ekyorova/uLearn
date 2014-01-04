/*global angular*/
(function (angular) {
  'use strict';
  
  function DiplomaWorkProposalsEditCtrl(
    $q,
    $scope,
    $filter,
    $state,
    $stateParams,
    DiplomaWorkProposal
  ) {
    if ($stateParams.diplomaWorkProposalId) {
      $scope.diplomaWorkProposal = DiplomaWorkProposal
      .get({diplomaWorkProposalId: $stateParams.diplomaWorkProposalId});
    } else {
      $scope.isEdit = false;
      $scope.diplomaWorkProposal = new DiplomaWorkProposal();
      $scope.diplomaWorkProposal.$promise =$q.when(
        $scope.diplomaWorkProposal
      );
    }
    $scope.saveClicked = false;
    

    $scope.save = function () {
      $scope.saveClicked = true;

      if ($scope.diplomaWorkProposalForm.$valid) {
        $scope.diplomaWorkProposal.roles = $filter('filter')($scope.roles, {selected: true});
        $scope.diplomaWorkProposal.$save().then(function () {
          $state.go('diplomaWorkProposals.search');
        });
      }
    };

    $scope.cancel = function () {
      $state.go('diplomaWorkProposals.search');
    };
  }
  
  DiplomaWorkProposalsEditCtrl.$inject = [
    '$q',
    '$scope',
    '$filter',
    '$state',
    '$stateParams',
    'DiplomaWorkProposal',
    'Role'
  ];
  
  angular.module('diplomaWorkProposals')
  .controller('DiplomaWorkProposalsEditCtrl', DiplomaWorkProposalsEditCtrl);
}(angular));
