console.log("LOADING app.js");

define(['backbone', 'js/router'],
	function(Backbone, Router) {
	return {

		// Start application
		start: function() {
			var router = new Router();
			Backbone.history.start();
		}
	}
});