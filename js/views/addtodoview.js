console.log("LOADING addtodoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/addform',
		'js/models/todomodel', 'js/collections/todocollection'], 
	function(Backbone, $, _, template, TodoModel, TodoColl) {
	return Backbone.View.extend({
		template: template,

		// Event for add button
		events: {
			'click #new_button': 'add'
		},

		//# Initialize function
		// Fetch todos to determine the new todo id in add function.
		// Call render function once collection is fetched.
		initialize: function(o) {
			var self = this;
			this.todoColl = new TodoColl();
			this.todoColl.fetch({
				success: function(collection, response) {
					self.render();
				}
			});
		},

		//# Render function
		// Renders template.
		render: function() {
			this.$el.html(this.template(this));
			return this;
		},

		//# Add function
		// Excecuted when "Add" button is pressed. 
		// Creates a new todo id by incrementing the last added todo's id.
		// Adds todo to todo collection and redirects to the newly created todo.
		add: function() {
			var length = this.todoColl.length;
			var newId = 1;
			if (length > 0) {
				newId = this.todoColl.at(length-1).get('id') + 1;
			}
			var todo = {
				id: newId,
				header: $.trim($('#new_todo').val()),
				description: $.trim($('#new_description').val())
			};
			this.todoColl.create(todo);
			window.location.href = '#/todo/'+newId;
		}
	});
});