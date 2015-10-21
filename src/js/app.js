angular.module('boilerplate', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/views/home.html',
			controller: 'DashboardCtrl'
		})

		.state('settings', {
			url: '/settings',
			templateUrl: 'src/views/settings.html',
			controller: 'SettingsCtrl'
		});

	$urlRouterProvider.otherwise('/');
})

.controller('AppCtrl', function($scope, $http) {
	$scope.app = new Object;

	$http.get('/src/config/app.json').success(function(data) {
		$scope.app = data;
	});

	$http.get('/src/config/menu.json').success(function(data) {
		$scope.app.menu = data;
	});

	$http.get('/src/data/user.json').success(function(data) {
		$scope.app.user = data;

		$http.get('/src/data/messages.json').success(function(data) {
			$scope.app.user.messages = data;
		});

		$http.get('/src/data/notifications.json').success(function(data) {
			$scope.app.user.notifications = data;
		})
	});
})

.run();
