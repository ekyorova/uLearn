/*global angular*/
(function (angular) {
  'use strict';
  
  function PracticeRatingsEditCtrl(
    $q,
    $scope,
    $filter,
    $state,
    $stateParams,
    PracticeRating
  ) {
    if ($stateParams.practiceRatingId) {
      $scope.practiceRating = PracticeRating
      .get({practiceRatingId: $stateParams.practiceRatingId});
    } else {
      $scope.isEdit = false;
      $scope.practiceRating = new PracticeRating();
      $scope.practiceRating.$promise =$q.when(
        $scope.practiceRating
      );
    }
    $scope.saveClicked = false;
    

    $scope.save = function () {
      $scope.saveClicked = true;

      if ($scope.practiceRatingForm.$valid) {
        $scope.practiceRating.$save().then(function () {
          $state.go('practiceRatings.search');
        });
      }
    };

    $scope.cancel = function () {
      $state.go('practiceRatings.search');
    };
  }
  
  PracticeRatingsEditCtrl.$inject = [
    '$q',
    '$scope',
    '$filter',
    '$state',
    '$stateParams',
    'PracticeRating'
  ];
  
  angular.module('practiceRatings')
  .controller('PracticeRatingsEditCtrl', PracticeRatingsEditCtrl);
}(angular));
