(function() {
	/**
	 * myApp
	 *
	 * Description
	 */
	angular
		.module('myApp')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$location', '$http'];

	function LoginController($location, $http) {
		var LC = this;

		LC.name = "Login Controller";
		LC.submit = submit;


		function submit(userData) {
			console.log(userData);
			var reqObject = {
				method: 'GET',
				url: 'assets/mockdata/data.json'
					// url: 'https://jsonplaceholder.typicode.com/posts'
				param:userData,
				data:userData
			};
			$http(reqObject).then(successCB, errorCB);

			function successCB(success) {
				console.log(success.data);
				$location.path('/student')

			}

			function errorCB(error) {
				console.log(error);
			}
		}
	}
})();