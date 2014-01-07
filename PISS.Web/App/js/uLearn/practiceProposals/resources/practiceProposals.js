/*global angular*/
(function (angular) {
  'use strict';

  angular.module('practiceProposals').factory('PracticeProposal',
  [
    '$resource',
    function ($resource) {
      return $resource(
      '/api/practiceProposals/:practiceProposalId',
      {practiceProposalId:'@practiceProposalId'}
      );
    }
  ]);
}(angular));
