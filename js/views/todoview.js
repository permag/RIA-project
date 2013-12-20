console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/todo'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		events: {
			'click #click_toggle': 'toggle',
			'click #click_remove': 'remove'
		},

		initialize: function(o) {
			var self = this;
			this.todoId = o.todoId;
			this.todoColl = o.todoColl;
			this.todo = null;
			this.todoColl.fetch({
				success: function(collection, response) {
					self.todo = collection.get(self.todoId);
					self.render();
				}
			});

			this.todo.on('change:done', this.render, this);
			this.todo.on('remove', function(){
				window.location.href = '#/todos';
			});
		},

		render: function() {
			this.$el.html(this.template(this.todo.toJSON()));	
			return this;
		},

		toggle: function(e) {
			e.preventDefault();
			this.todoColl.get(this.todoId).toggle();
		},

		remove: function(e) {
			e.preventDefault();
			if (confirm('Sure u wanna delete this?')) {
				this.todoColl.remove(this.todo);
				localStorage.removeItem('todo-store-' + this.todo.id)
			}
		}
	});
});
