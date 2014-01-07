/*global angular*/
(function (angular) {
  'use strict';

  function DiplomaWorkReviewsSearchCtrl($scope, $state, $stateParams, DiplomaWorkReview) {

    $scope.newDiplomaWorkReview = function () {
      $state.go('diplomaWorkReviews.new');
    };


    DiplomaWorkReview.query($stateParams).$promise.then(function (diplomaWorkReviews) {
      $scope.diplomaWorkReviews = diplomaWorkReviews;
    });

    $scope.editDiplomaWorkReview = function (diplomaWorkReview) {
      $state.go(
        'diplomaWorkReviews.view',
		{ diplomaWorkReviewId: diplomaWorkReview.diplomaWorkReviewId }
      );
    };
  }
  
  DiplomaWorkReviewsSearchCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'DiplomaWorkReview'
  ];

  angular.module('diplomaWorkReviews')
  .controller('DiplomaWorkReviewsSearchCtrl', DiplomaWorkReviewsSearchCtrl);
}(angular));
