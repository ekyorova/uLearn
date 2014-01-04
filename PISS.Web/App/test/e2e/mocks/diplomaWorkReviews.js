/*global angular*/
(function (angular) {
  'use strict';
  angular.module('app').config(function ($httpBackendConfiguratorProvider) {
    var diplomaWorkReviews = [{
        diplomaWorkReviewId: 1,
        diplomaWorkTitle: "Lorem Ipsum",
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
        resultsInterpretation: 6
      }, {
	    diplomaWorkReviewId: 2,
        diplomaWorkTitle: "Lorem",
        theoretical: 3,
        ownIdeas: 4,
        completion: 4,
        style: 4,
        structure: 3,
        functionality: 4, 
        reliability: 3,
        documentation: 2,
        experimentalDetails: 3,
        resultsPresentation: 4,
        resultsInterpretation: 4
      }],
      nextDiplomaWorkProposalId = 3;

    $httpBackendConfiguratorProvider
      .when('GET', '/api/diplomaWorkReviews?username&fullname&showActive&exact',
        function ($params, $filter) {
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

          $jsonData.hasPassword = $jsonData.password !== undefined && $jsonData.password !== '';
          diplomaWorkReviews[diplomaWorkReviewIndex] = $jsonData;
          
          return [200];
        })
      .when('POST', '/api/diplomaWorkReviews',
        function ($params, $jsonData) {
          if (!$jsonData || $jsonData.diplomaWorkReviewId) {
            return [400];
          }

          $jsonData.diplomaWorkReviewId = ++nextDiplomaWorkProposalId;
          $jsonData.hasPassword = $jsonData.password !== undefined && $jsonData.password !== '';
          diplomaWorkReviews.push($jsonData);
          
          return [200];
        })
      .when('GET', '/api/roles',
        function () {
          return [200];
        });
  });
}(angular));
