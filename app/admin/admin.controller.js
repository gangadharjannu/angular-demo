(function() {
	/**
	 * myApp
	 *
	 * Description
	 */
	angular
		.module('myApp')
		.controller('AdminController', AdminController);

	AdminController.$inject = [];

	function AdminController() {
		var AC = this;

		AC.name="Admin Controller";
	}

})();