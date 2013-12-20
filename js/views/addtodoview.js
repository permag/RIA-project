console.log("LOADING addtodoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/addform',
		'js/models/todomodel', 'js/collections/todocollection'], 
	function(Backbone, $, _, template, TodoModel, TodoColl) {
	return Backbone.View.extend({
		template: template,
		events: {
			'click #new_button': 'add'
		},

		initialize: function(o) {
			var self = this;
			this.todoColl = new TodoColl();
			this.todoColl.fetch({
				success: function(collection, response) {
					self.render();
				}
			});
		},

		render: function() {
			this.$el.html(this.template(this));
			return this;
		},

		add: function() {
			var length = this.todoColl.length;
			var newId = 1;
			if (length > 0) {
				newId = this.todoColl.at(length-1).get('id') + 1;
			}
			var todo = {
				id: newId,
				header: $.trim($('#new_todo').val()),
				description: $.trim($('#new_description').val()),
				date: new Date(),
				done: false
			};
			this.todoColl.create(todo);
			window.location.href = '#/todo/'+newId;
		}
	});
});