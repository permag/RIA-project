
define(['backbone', 'js/collections/todocollection', 'js/models/todomodel'], 
	function(Backbone, TodoCollection, TodoModel) {

	// Fetch collection of todos
	var todoColl = new TodoCollection();
	todoColl.localStorage = new Backbone.LocalStorage('TEST-todo-store');
	var todos = null;
	todoColl.fetch({
		success: function(collection, response) {
			todos = collection;
		}
	});

	describe('A Todos Collection', function() {

		it('should be able to create object instance', function() {
			expect(todoColl instanceof TodoCollection).toBeTruthy();
		});

		it('should be able to contain items of TodoModel instance', function() {
			var todo = {
				id: 1,
				header: 'Test: header',
				description: 'Test: description'
			};
			todoColl.create(todo);

			expect(todoColl.get(1) instanceof TodoModel).toBeTruthy();
		});

	});

});