/*global angular*/
(function (angular) {
  'use strict';
  angular.module('app').config(function ($httpBackendConfiguratorProvider) {
      var diplomaWorkReviews = [{
        diplomaWorkReviewId: 1,
        diplomaWorkTitle: 'Lorem Ipsum',
        theoretical: 5,
        ownIdeas: 6,
        completion: 4,
        style: 6,
        structure: 5,
        functionality: 4,
        reliability: 5,
        documentation: 5,
        experimentalDetails: 5,
        resultsPresentation: 5,
        resultsInterpretation: 6,
        generalOpinion: 'mnogu dobre',
        questions: 'nqkvi vyprosi'
      }, {
        diplomaWorkReviewId: 2,
        diplomaWorkTitle: 'diferncirane na difernciali',
        theoretical: 5,
        ownIdeas: 6,
        completion: 4,
        style: 6,
        structure: 5,
        functionality: 4,
        reliability: 5,
        documentation: 5,
        experimentalDetails: 5,
        resultsPresentation: 5,
        resultsInterpretation: 6,
        generalOpinion: 'mnogu dobre',
        questions: 'nqkvi vyprosi'
      }, {
        diplomaWorkReviewId: 3,
        diplomaWorkTitle: 'integrigrane na integrali',
        theoretical: 5,
        ownIdeas: 6,
        completion: 4,
        style: 6,
        structure: 5,
        functionality: 4,
        reliability: 5,
        documentation: 5,
        experimentalDetails: 5,
        resultsPresentation: 5,
        resultsInterpretation: 6,
        generalOpinion: 'mnogu dobre',
        questions: 'nqkvi vyprosi'
      }],
      nextDiplomaWorkReviewId = 4;

      $httpBackendConfiguratorProvider
      .when('GET', '/api/diplomaWorkReviews',
        function () {
          return [
            200,
            diplomaWorkReviews
          ];
        })
      .when('GET', '/api/diplomaWorkReviews/:diplomaWorkReviewId',
        function ($params, $filter) {
          var diplomaWorkReviewId = parseInt($params.diplomaWorkReviewId, 10),
            diplomaWorkReview = $filter('filter')(
              diplomaWorkReviews,
              {diplomaWorkReviewId: diplomaWorkReviewId}
			)[0];

          if (!diplomaWorkReview) {
            return [400];
          }

          return [200, diplomaWorkReview];
        })
      .when('POST', '/api/diplomaWorkReviews/:diplomaWorkReviewId',
        function ($params, $jsonData, $filter) {
          var diplomaWorkReviewId = parseInt($params.diplomaWorkReviewId, 10),
            diplomaWorkReviewIndex = diplomaWorkReviews
			.indexOf($filter('filter')(
              diplomaWorkReviews,
              {diplomaWorkReviewId: diplomaWorkReviewId}
			)[0]);

          if (diplomaWorkReviewIndex === -1) {
            return [400];
          }

          diplomaWorkReviews[diplomaWorkReviewIndex] = $jsonData;
          
          return [200];
        })
      .when('POST', '/api/diplomaWorkReviews',
        function ($params, $jsonData) {
          if (!$jsonData || $jsonData.diplomaWorkReviewId) {
            return [400];
          }

          $jsonData.diplomaWorkReviewId = ++nextDiplomaWorkReviewId;
          diplomaWorkReviews.push($jsonData);
          
          return [200];
        });
    });
}(angular));
