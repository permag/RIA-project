console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/todo'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,

		// Events for toggling the todo done status, and remove button.
		events: {
			'click #click_toggle': 'toggle',
			'click #click_remove': 'remove'
		},

		// Get the todo from collection and call render function.
		// When chaning the todo done status, template automatically re-renders.
		// If todo is removed, page redirects to list of todos.
		initialize: function(o) {
			this.todoId = o.todoId;
			this.todoColl = o.todoColl;
			this.todo = null;
			try {
				this.todo = o.todos.get(this.todoId);

				this.todo.on('change:done', this.render, this);
				this.todo.on('remove', function() {
					window.location.href = '#/todos';
				});

				this.render();

			} catch (err) {
				this.render();
			}
		},

		// Render template
		render: function() {
			var data = null;
			if (this.todo != null) {
				data = this.todo.toJSON();
			} else {
				data = {id: false};
			}
			this.$el.html(this.template(data));
			return this;
		},

		// Toggle done status, triggered by event. Calls model function to save model 
		// changes in collection.
		toggle: function(e) {
			e.preventDefault();
			this.todoColl.get(this.todoId).toggle();
		},

		// Remove function is triggered by event.
		remove: function(e) {
			e.preventDefault();
			if (confirm('Sure u wanna delete this?')) {
				this.todo.destroy();
			}
		}
	});
});
