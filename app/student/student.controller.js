(function() {
	'use strict';

	/**
	 * myApp Module
	 *
	 * Description
	 */
	angular
		.module('myApp')
		.controller('StudentController', StudentController);

	StudentController.$inject = [];

	function StudentController() {
		var SC = this;
		SC.name="Student Controller";
	}

}());

