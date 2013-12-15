console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/todo'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		events: {
			'click #click_toggle': 'toggle'
		},
		initialize: function(o) {
			var self = this;
			this.todoId = o.todoId;
			this.todoColl = o.todoColl;
			this.data = null;
			this.todoColl.fetch({
				success: function(collection, response) {
					self.data = collection.get(self.todoId);
					self.render();
				}
			});

			this.todoColl.get(this.todoId).on('change:done', this.render, this);
		},
		render: function() {
			this.$el.html(this.template(this.data.toJSON()));	
			return this;
		},
		toggle: function(e) {
			e.preventDefault();
			this.todoColl.get(this.todoId).toggle();
		}
	});
});
