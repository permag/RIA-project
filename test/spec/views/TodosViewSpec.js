
define(['js/views/todosview', 'js/collections/todocollection', 'js/models/TodoModel'], 
	function(TodosView, TodoCollection) {

	// Fetch collection of todos
	var todoColl = new TodoCollection();
	var todos = null;
	todoColl.fetch({
		success: function(collection, response) {
			todos = collection;
		}
	});
	var todosView = new TodosView({todoColl: todoColl, todos: todos, completed: false});

	describe('A Todos View', function() {

		it('should be able to get Todos object', function() {
			expect(todosView.getTodos() instanceof Object).toBeTruthy();
		});

		it('should be able to get Todos object containing objects', function() {
			expect(todosView.getTodos().todos instanceof Object).toBeTruthy();
		});

		it('should be able to get Todos object done status', function() {
			expect(todosView.getTodos().isCompleted).toBe(false);
		});
	});

});