console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/todos'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,

		// Initialize function.
		// Fetches all todos from localStorage into the collection
		// and calls the render function.
		initialize: function(o) {
			var self = this;
			this.isCompleted = o.completed;
			this.todoColl = o.todoColl;
			this.todos = null;
			this.todoColl.fetch({
				success: function(collection, response) {
					self.todos = collection;
					self.render();
				}
			});

			this.todoColl.on('change', this.render, this);

			var active = $('#list-active');
			var completed = $('#list-completed');
			if (this.isCompleted) {
				active.removeClass('active');
				completed.addClass('active');
			} else {
				completed.removeClass('active');
				active.addClass('active');
			}
		},

		// Render template
		render: function() {
			this.$el.html(this.template(this.getTodos()));
			return this;
		},
		
		// Get all todos from collection and return an object
		// that is being used to get the todo data in the jade template.
		getTodos: function() {
			return {
				todos: this.todos.toJSON(),
				isCompleted: this.isCompleted
			}
		}
	});
});
