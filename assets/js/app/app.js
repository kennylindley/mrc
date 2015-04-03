var mrcApp = angular.module('mrc', ['ngRoute']);

mrcApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/about-us', {
				template: 'templates/about-us.html'
			}).
			when('/our-network', {
				template: 'templates/our-network.html'
			}).
			when('/sales-and-pricing', {
				template: 'templates/sales-and-pricing.html'
			}).
			when('/contact-us', {
				template: 'templates/contact-us.html',
				controller: 'ContactController'
			}).
			when('/support', {
				template: 'templates/support.html',
				controller: 'SupportController'
			}).
			otherwise({
				template: 'templates/main.html'
			});
	}
]);

mrcApp.controller('HeaderController', function($scope, $location) {
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path;
	};
});
