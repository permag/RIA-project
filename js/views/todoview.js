console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/todos', 
		'js/collections/todocollection', 'js/models/todomodel'], 
	function(Backbone, $, _, template, TodoCollection, TodoModel) {
	return Backbone.View.extend({
		template: template,
		data: null,
		initialize: function(o) {
			var self = this;
			this.todoColl = new TodoCollection();
			this.newTodo({
				id: 'todo_6',
				header: 'Sixth todo',
				description: 'Some description...',
				date: 'undefined',
				done: false,
				list: 'list_1'
			});
			
			
			this.todoColl.fetch({
				success: function(collection, response) {
					console.log(collection.toJSON());
					//console.log(collection.get('todo_4').toJSON());
					self.data = collection;
					self.render();
				}
			});
			setTimeout(function(){
				self.newTodo({
					id: 'todo_11',
					header: 'Eleventh todo',
					description: 'Some description...',
					date: 'undefined',
					done: false,
					list: 'list_1'
				});
			},4000);
			
			this.todoColl.on('add', this.render, this );
		},
		render: function() {
			this.$el.html(this.template(this.data.get('todo_6').toJSON()));
			if (this.data.get('todo_11')) {
				this.$el.html(this.template(this.data.get('todo_11').toJSON()));	
			}
			return this;
		},
		
		

		newTodo: function(todo) {
			this.todoColl.create(todo);
		}
	});
});
