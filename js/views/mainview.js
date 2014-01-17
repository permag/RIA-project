console.log("LOADING mainview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/main', 'bootstrap-js'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,

		initialize: function(o) {
			this.options = o;
			this.shortKeys();
		},

		// Create basic app layout
		render: function() {
			this.$el.html(this.template());
			this.$('#nav').append(this.options.navView.render().el);
			this.$('#left-menu').append(this.options.leftMenuView.render().el);
			this.$('#footer').append(this.options.footerView.render().el);
			return this;
		},

		// Render content view only
		renderContent: function(view) {
			this.$('#content').html(view.el);  // calls render on init
			return this;
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
	});
});