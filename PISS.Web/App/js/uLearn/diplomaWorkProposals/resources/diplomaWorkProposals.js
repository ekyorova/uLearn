/*global angular*/
(function (angular) {
  'use strict';

  angular.module('diplomaWorkProposals').factory('DiplomaWorkProposal',
  [
    '$resource',
    function ($resource) {
      return $resource(
      '/api/diplomaWorkProposals/:diplomaWorkProposalId',
      {diplomaWorkProposalId:'@diplomaWorkProposalId'}
      );
    }
  ]);
}(angular));
