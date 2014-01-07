/*global angular*/
(function (angular) {
  'use strict';

  function PracticeRatingsSearchCtrl($scope, $state, $stateParams, PracticeRating) {

    $scope.newPracticeRating = function () {
      $state.go('practiceRatings.new');
    };


    PracticeRating.query($stateParams).$promise.then(function (practiceRatings) {
      $scope.practiceRatings = practiceRatings;
    });

    $scope.editPracticeRating = function (practiceRating) {
      $state.go(
        'practiceRatings.edit',
		{ practiceRatingId: practiceRating.practiceRatingId }
      );
    };
  }
  
  PracticeRatingsSearchCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'PracticeRating'
  ];

  angular.module('practiceRatings')
  .controller('PracticeRatingsSearchCtrl', PracticeRatingsSearchCtrl);
}(angular));
