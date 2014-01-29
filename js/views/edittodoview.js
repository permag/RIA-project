console.log("LOADING addtodoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/editform',
		'js/models/todomodel', 'js/collections/todocollection'],
	function(Backbone, $, _, template, TodoModel, TodoColl) {
	return Backbone.View.extend({
		// Jade template
		template: template,

		// Click event for edit submit button
		events: {
			'click #edit_button': 'edit'
		},

		// Select todo from collection
		initialize: function(o) {
			this.todoId = o.todoId;
			this.todoColl = o.todoColl;
			this.todo = o.todos.get(this.todoId);
			this.render();
		},

		// Render output
		render: function() {
			this.$el.html(this.template(this.todo.toJSON()));
			return this;
		},

		// Check so input field isn't empty.
		// Save new values for todo model into collection.
		// Redirect back to edited todo.
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
