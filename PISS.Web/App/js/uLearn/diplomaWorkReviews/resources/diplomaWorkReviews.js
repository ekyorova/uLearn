/*global angular*/
(function (angular) {
  'use strict';

  angular.module('diplomaWorkReviews').factory('DiplomaWorkReview',
  [
    '$resource',
    function ($resource) {
      return $resource(
      '/api/diplomaWorkReviews/:diplomaWorkReviewId',
      {diplomaWorkReviewId:'@diplomaWorkReviewId'}
      );
    }
  ]);
}(angular));
