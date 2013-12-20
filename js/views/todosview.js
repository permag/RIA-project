console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/todos'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,

		initialize: function(o) {
			var self = this;
			this.todoColl = o.todoColl;
			this.todos = null;
			this.todoColl.fetch({
				success: function(collection, response) {
					self.todos = collection;
					self.render();
				}
			});

			this.todoColl.on('change', this.render, this);
		},

		render: function() {
			this.$el.html(this.template(this.getTodos()));
			return this;
		},
		
		getTodos: function() {
			return {todos: this.todos.toJSON()}
		}
	});
});
