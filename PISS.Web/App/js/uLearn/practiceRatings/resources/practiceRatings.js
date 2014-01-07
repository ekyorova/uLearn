/*global angular*/
(function (angular) {
  'use strict';

  angular.module('practiceRatings').factory('PracticeRating',
  [
    '$resource',
    function ($resource) {
      return $resource(
      '/api/practiceProposals/:practiceRatingId',
      {practiceProposalId:'@practiceRatingId'}
      );
    }
  ]);
}(angular));
