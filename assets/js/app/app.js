var mrcApp = angular.module('mrc', ['ngRoute']);

mrcApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/about-us', {
				templateUrl: 'templates/about-us.html',
				title: 'Maple River Communications - About Us'
			}).
			when('/our-network', {
				templateUrl: 'templates/our-network.html',
				title: 'Maple River Communications - Our Network'
			}).
			when('/sales-and-pricing', {
				templateUrl: 'templates/sales-and-pricing.html',
				title: 'Maple River Communications - Sales and Pricing'
			}).
			when('/contact-us', {
				templateUrl: 'templates/contact-us.html',
				title: 'Maple River Communications - Contact Us',
				controller: 'ContactController'
			}).
			when('/support', {
				templateUrl: 'templates/support.html',
				title: 'Maple River Communications - Support',
				controller: 'SupportController'
			}).
			otherwise({
				templateUrl: 'templates/main.html',
				title: 'Maple River Communications - Home'
			});
	}
]);

mrcApp.controller('HeaderController', function($scope, $location) {
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path;
	};
});
