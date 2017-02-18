(function() {
	'use strict';

	/**
	 *  Module
	 *
	 * Description
	 */
	 // configuration process: routing, $http 
	angular
		.module('myApp')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo:'/login'
			})
			.when('/login', {
				templateUrl: 'app/login/login.tmpl.html',
				controller: 'LoginController',
				controllerAs: 'LC',
			})
			.when('/student', {
				templateUrl: 'app/student/student.tmpl.html',
				controller: 'StudentController',
				controllerAs: 'SC'
			})
			.when('/admin', {
				templateUrl: 'app/admin/admin.tmpl.html',
				controller: 'AdminController',
				controllerAs: 'AC'
			})
			.otherwise({
				redirectTo: '/login'
			});
	}
})();