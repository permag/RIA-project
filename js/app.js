console.log("LOADING app.js");

define(['backbone', 'js/router'],
	function(Backbone, Router) {
	return {

		// Start application
		start: function() {
			var router = new Router();
			this.shortKeys();
			Backbone.history.start();
		},

		// Initialize short keys
		shortKeys: function() {

			$(document).keyup(function(e) {
				var route = Backbone.history.fragment;

				// If not on #/new page
				if (route !== 'new') {
					// Press "n" for new todo
					if (e.keyCode === 78) {
						window.location.hash = '#/new';
					}
				}

				// if on #/new page
				if (route === 'new') {
					// Press "enter" for submit
					if (e.keyCode === 13) {
						$('#new_button').click();
					}
				}

				// If on #/todo/{id}
				if (route.substring(0, 4) === 'todo' && 
					route !== 'todo' &&
					route !== 'todos' &&
					route !== 'todos/completed') {
					// Press "x" to delete todo
					if (e.keyCode === 88) {
						$('#click_remove').click();
					}
				}

			});
		}
	}
});