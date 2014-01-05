/*global angular*/
(function (angular) {
  'use strict';
  angular.module('app').config(function ($httpBackendConfiguratorProvider) {
    var diplomaWorkProposals = [{
        diplomaWorkProposalId: 1,
        subject: 'Lorem',
        anotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna sem, ' +
          'faucibus eget libero mollis, sagittis blandit risus. Cras in ante vel est accumsan ' +
          'pulvinar vitae et est. Proin tortor ipsum, condimentum sed eleifend in, ullamcorper ' +
          'quis risus. Quisque non tempor sem, vel pharetra sem. Sed tempus viverra varius. ' +
          'Sed tincidunt est non turpis consectetur consequat. Proin venenatis placerat justo ut ' +
          'laoreet. Quisque eu volutpat metus, non cursus mi.',
        goal: 'Lorem',
        problems: 'Lorem',
        limitations: 'Lorem',
        term: 'Lorem'
      }, {
        diplomaWorkProposalId: 2,
        subject: 'Lorem',
        anotation: 'Lorem',
        goal: 'Lorem',
        problems: 'Lorem',
        limitations: 'Lorem',
        term: 'Lorem'
      }, {
        diplomaWorkProposalId: 3,
        subject: 'Lorem',
        anotation: 'Lorem',
        goal: 'Lorem',
        problems: 'Lorem',
        limitations: 'Lorem',
        term: 'Lorem'
      }],
      nextDiplomaWorkProposalId = 4;

    $httpBackendConfiguratorProvider
      .when('GET', '/api/diplomaWorkProposals?username&fullname&showActive&exact',
        function () {
          return [
            200,
            diplomaWorkProposals
          ];
        })
      .when('GET', '/api/diplomaWorkProposals/:diplomaWorkProposalId',
        function ($params, $filter) {
          var diplomaWorkProposalId = parseInt($params.diplomaWorkProposalId, 10),
            diplomaWorkProposal = $filter('filter')(
              diplomaWorkProposals,
              {diplomaWorkProposalId: diplomaWorkProposalId}
			)[0];

          if (!diplomaWorkProposal) {
            return [400];
          }

          return [200, diplomaWorkProposal];
        })
      .when('POST', '/api/diplomaWorkProposals/:diplomaWorkProposalId',
        function ($params, $jsonData, $filter) {
          var diplomaWorkProposalId = parseInt($params.diplomaWorkProposalId, 10),
            diplomaWorkProposalIndex = diplomaWorkProposals
			.indexOf($filter('filter')(
              diplomaWorkProposals,
              {diplomaWorkProposalId: diplomaWorkProposalId}
			)[0]);

          if (diplomaWorkProposalIndex === -1) {
            return [400];
          }

          $jsonData.hasPassword = $jsonData.password !== undefined && $jsonData.password !== '';
          diplomaWorkProposals[diplomaWorkProposalIndex] = $jsonData;
          
          return [200];
        })
      .when('POST', '/api/diplomaWorkProposals',
        function ($params, $jsonData) {
          if (!$jsonData || $jsonData.diplomaWorkProposalId) {
            return [400];
          }

          $jsonData.diplomaWorkProposalId = ++nextDiplomaWorkProposalId;
          diplomaWorkProposals.push($jsonData);
          
          return [200];
        })
      .when('GET', '/api/roles',
        function () {
          return [200];
        });
  });
}(angular));
