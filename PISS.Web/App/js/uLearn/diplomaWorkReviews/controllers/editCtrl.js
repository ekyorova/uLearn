/*global angular*/
(function (angular) {
  'use strict';
  
  function DiplomaWorkReviewsEditCtrl(
    $q,
    $scope,
    $filter,
    $state,
    $stateParams,
    DiplomaWorkReview
  ) {
    if ($stateParams.diplomaWorkReviewId) {
      $scope.diplomaWorkReview = DiplomaWorkReview
      .get({diplomaWorkReviewId: $stateParams.diplomaWorkReviewId});
    } else {
      $scope.isEdit = false;
      $scope.diplomaWorkReview = new DiplomaWorkReview();
      $scope.diplomaWorkReview.$promise =$q.when(
        $scope.diplomaWorkReview
      );
    }
    $scope.saveClicked = false;
    

    $scope.save = function () {
      $scope.saveClicked = true;

      if ($scope.diplomaWorkReviewForm.$valid) {
        $scope.diplomaWorkReview.$save().then(function () {
          $state.go('diplomaWorkReviews.search');
        });
      }
    };

    $scope.cancel = function () {
      $state.go('diplomaWorkReviews.search');
    };
  }
  
  DiplomaWorkReviewsEditCtrl.$inject = [
    '$q',
    '$scope',
    '$filter',
    '$state',
    '$stateParams',
    'DiplomaWorkReview'
  ];
  
  angular.module('diplomaWorkReviews')
  .controller('DiplomaWorkReviewsEditCtrl', DiplomaWorkReviewsEditCtrl);
}(angular));
