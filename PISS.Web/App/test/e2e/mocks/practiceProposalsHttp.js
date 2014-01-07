/*global angular*/
(function (angular) {
  'use strict';
  angular.module('app').config(function ($httpBackendConfiguratorProvider) {
    var practiceProposals = [{
        practiceProposalId: 1,
        company: 'FMI',
        companyInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        subject: 'Kur za PISS',
        anotation: '1. Kur; 2. za PISS',
        goal: 'Kur za PISS',
        tasks: 'Kur za PISS',
        condition: 'Kur za PISS',
        duration: 'Kur za PISS',
        workplace: 'Kur za PISS'
      }, {
        practiceProposalId: 2,
        company: 'ADASDAD',
        companyInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        subject: 'Kur za PISS',
        anotation: '1. Kur; 2. za PISS',
        goal: 'Kur za PISS',
        tasks: 'Kur za PISS',
        condition: 'Kur za PISS',
        duration: 'Kur za PISS',
        workplace: 'Kur za PISS'
      }, {
        practiceProposalId: 3,
        company: 'Zagorka',
        companyInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        subject: 'Kur za PISS',
        anotation: '1. Kur; 2. za PISS',
        goal: 'Kur za PISS',
        tasks: 'Kur za PISS',
        condition: 'Kur za PISS',
        duration: 'Kur za PISS',
        workplace: 'Kur za PISS'
      }],
      nextPracticeProposalId = 4;

    $httpBackendConfiguratorProvider
      .when('GET', '/api/practiceProposals?username&fullname&showActive&exact',
        function () {
          return [
            200,
            practiceProposals
          ];
        })
      .when('GET', '/api/practiceProposals/:practiceProposalId',
        function ($params, $filter) {
          var practiceProposalId = parseInt($params.practiceProposalId, 10),
            practiceProposal = $filter('filter')(
              practiceProposals,
              {practiceProposalId: practiceProposalId}
			)[0];

          if (!practiceProposal) {
            return [400];
          }

          return [200, practiceProposal];
        })
      .when('POST', '/api/practiceProposals/:practiceProposalId',
        function ($params, $jsonData, $filter) {
          var practiceProposalId = parseInt($params.practiceProposalId, 10),
            practiceProposalIndex = practiceProposals
			.indexOf($filter('filter')(
              practiceProposals,
              {practiceProposalId: practiceProposalId}
			)[0]);

          if (practiceProposalIndex === -1) {
            return [400];
          }

          $jsonData.hasPassword = $jsonData.password !== undefined && $jsonData.password !== '';
          practiceProposals[practiceProposalIndex] = $jsonData;
          
          return [200];
        })
      .when('POST', '/api/practiceProposals',
        function ($params, $jsonData) {
          if (!$jsonData || $jsonData.practiceProposalId) {
            return [400];
          }

          $jsonData.practiceProposalId = ++nextPracticeProposalId;
          practiceProposals.push($jsonData);
          
          return [200];
        });
  });
}(angular));
