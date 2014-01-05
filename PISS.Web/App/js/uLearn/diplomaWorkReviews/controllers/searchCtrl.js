/*global angular, _*/
(function (angular, _) {
  'use strict';

  function DiplomaWorkReviewsSearchCtrl($scope, $state, $stateParams, DiplomaWorkReview) {
    $scope.filters = {
      username: null //always show the username filter
    };

    _.forOwn($stateParams, function(value, param) {
      if (value !== null && value !== undefined) {
        $scope.filters[param] = value;
      }
    });

    $scope.newDiplomaWorkReview = function () {
      $state.go('diplomaWorkReviews.new');
    };


    DiplomaWorkReview.query($stateParams).$promise.then(function (diplomaWorkReviews) {
      $scope.diplomaWorkReviews = diplomaWorkReviews.map(function (diplomaWorkReviews) {
        return {
          diplomaWorkReviewId: diplomaWorkReviews.diplomaWorkReviewId,
          diplomaWorkTitle: diplomaWorkReviews.diplomaWorkTitle,
          theoretical: diplomaWorkReviews.theoretical,
          ownIdeas: diplomaWorkReviews.ownIdeas,
          completion: diplomaWorkReviews.completion,
          style: diplomaWorkReviews.style,
          structure: diplomaWorkReviews.structure,
          functionality: diplomaWorkReviews.functionality,
          reliability: diplomaWorkReviews.reliability,
          documentation: diplomaWorkReviews.documentation,
          experimentalDetails: diplomaWorkReviews.experimentalDetails,
          resultsPresentation: diplomaWorkReviews.resultsPresentation,
          resultsInterpretation: diplomaWorkReviews.resultsInterpretation,
          generalOpinion: diplomaWorkReviews.generalOpinion,
          questions: diplomaWorkReviews.questions
        };
      });
    });

    $scope.editDiplomaWorkReview = function (diplomaWorkReview) {
      $state.go(
        'diplomaWorkReviews.edit',
		{ diplomaWorkReviewId: diplomaWorkReview.diplomaWorkReviewlId }
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
}(angular, _));
