angular.module('boilerplate', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: 'DashboardCtrl'
		})

		.state('settings', {
			url: '/settings',
			templateUrl: 'app/views/settings.html',
			controller: 'SettingsCtrl'
		});

	$urlRouterProvider.otherwise('/');
})

.controller('AppCtrl', function($scope, $http) {
	$scope.app = new Object;

	$http.get('/app/config/app.json').success(function(data) {
		$scope.app = data;
	});

	$http.get('/app/config/menu.json').success(function(data) {
		$scope.app.menu = data;
	});

	$http.get('/app/data/user.json').success(function(data) {
		$scope.app.user = data;

		$http.get('/app/data/messages.json').success(function(data) {
			$scope.app.user.messages = data;
		});

		$http.get('/app/data/notifications.json').success(function(data) {
			$scope.app.user.notifications = data;
		})
	});
})

.run();
