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
			this.model = null;
			this.todoColl.fetch({
				success: function(collection, response) {
					self.model = collection.get(self.todoId);
					self.render();
				}
			});

			this.model.on('change:done', this.render, this);
			this.model.on('remove', function(){
				window.location.href = '#/todos';
			});
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));	
			return this;
		},

		toggle: function(e) {
			e.preventDefault();
			this.todoColl.get(this.todoId).toggle();
		},

		remove: function(e) {
			e.preventDefault();
			this.todoColl.remove(this.model);
			localStorage.removeItem('todo-store-' + this.model.id)
		}
	});
});
