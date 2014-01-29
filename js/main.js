'use strict';

function AppController($scope) {
	$scope.countries = _.range(1, 28);
	$scope.topics = _.range(1, 10);
	$scope.languages = _.range(1, 28);

	$scope.selectedCountry = 1;
	$scope.selectedTopic = 1;
	$scope.selectedLanguage = 1;
	
	$scope.contentPath = null;

	$scope.$watch('selectedCountry + selectedTopic + selectedLanguage', function() {
		$scope.contentPath = 'data/country_'+ $scope.selectedCountry +'/topic_' + $scope.selectedTopic + '/lang_' + $scope.selectedLanguage + '.html';
	});
} 
