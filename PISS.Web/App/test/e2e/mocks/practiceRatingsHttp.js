/*global angular*/
(function (angular) {
  'use strict';
  angular.module('app').config(function ($httpBackendConfiguratorProvider) {
    var practiceRatings = [{
        practiceRatingId: 1,
        completion: '2',
        results: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        aquiredSkills: 'Kur za PISS',
        finishedOnTime: '1. Kur; 2. za PISS',
        reasons: 'Kur za PISS',
        opinion: 'Kur za PISS',
        overallRatings: 'Kur za PISS',
        recommendations: 'Kur za PISS'
      }, {
        practiceRatingId: 2,
        completion: '2',
        results: '22223',
        aquiredSkills: 'Kur za PISS',
        finishedOnTime: '1. Kur; 2. za PISS',
        reasons: 'Kur za PISS',
        opinion: 'Kur za PISS',
        overallRatings: 'Kur za PISS',
        recommendations: 'Kur za PISS'
      }, {
        practiceRatingId: 3,
        completion: '2',
        results: '4fdsfvdcsdgfs',
        aquiredSkills: 'Kur za PISS',
        finishedOnTime: '1. Kur; 2. za PISS',
        reasons: 'Kur za PISS',
        opinion: 'Kur za PISS',
        overallRatings: 'Kur za PISS',
        recommendations: 'Kur za PISS'
      }],
      nextPracticeRatingId = 4;

    $httpBackendConfiguratorProvider
      .when('GET', '/api/practiceRatings?username&fullname&showActive&exact',
        function () {
          return [
            200,
            practiceRatings
          ];
        })
      .when('GET', '/api/practiceRatings/:practiceRatingId',
        function ($params, $filter) {
          var practiceRatingId = parseInt($params.practiceRatingId, 10),
            practiceRating = $filter('filter')(
              practiceRatings,
              {practiceRatingId: practiceRatingId}
			)[0];

          if (!practiceRating) {
            return [400];
          }

          return [200, practiceRating];
        })
      .when('POST', '/api/practiceRatings/:practiceRatingId',
        function ($params, $jsonData, $filter) {
          var practiceRatingId = parseInt($params.practiceRatingId, 10),
            practiceRatingIndex = practiceRatings
			.indexOf($filter('filter')(
              practiceRatings,
              {practiceRatingId: practiceRatingId}
			)[0]);

          if (practiceRatingIndex === -1) {
            return [400];
          }

          $jsonData.hasPassword = $jsonData.password !== undefined && $jsonData.password !== '';
          practiceRatings[practiceRatingIndex] = $jsonData;
          
          return [200];
        })
      .when('POST', '/api/practiceRatings',
        function ($params, $jsonData) {
          if (!$jsonData || $jsonData.practiceRatingId) {
            return [400];
          }

          $jsonData.practiceRatingId = ++nextPracticeRatingId;
          practiceRatings.push($jsonData);
          
          return [200];
        });
  });
}(angular));
