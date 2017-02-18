(function() {
	'use strict';

	/**
	 * myApp Module
	 *
	 * Description
	 */
	angular
		.module('myApp')
		.controller('MainController', MainController);

	MainController.$inject = [];

	function MainController() {
		var MC = this;
		MC.name="Main Controller";
	}

}());

