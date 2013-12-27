console.log("LOADING addtodoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/editform',
		'js/models/todomodel', 'js/collections/todocollection'], 
	function(Backbone, $, _, template, TodoModel, TodoColl) {
	return Backbone.View.extend({
		template: template,
		events: {
			'click #edit_button': 'edit'
		},

		initialize: function(o) {
			var self = this;
			this.todoId = o.todoId;
			this.todo = null;
			this.todoColl = new TodoColl();
			this.todoColl.fetch({
				success: function(collection, response) {
					self.todo = collection.get(self.todoId);
					self.render();
				}
			});
		},

		render: function() {
			this.$el.html(this.template(this.todo.toJSON()));
			return this;
		},

		edit: function() {
			if ($.trim($('#edit_todo').val()) == '') {
				alert('Todo cannot be blank.');
				return;
			}
			this.todoColl.get(this.todoId).save({
				header: $.trim($('#edit_todo').val()),
				description: $.trim($('#edit_description').val())
			});
			window.location.href = '#/todo/'+this.todoId;
		}
	});
});