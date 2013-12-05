
define(['js/models/todomodel'], function(TodoModel) {

	describe('A Todo Model', function() {

		var todo = new TodoModel();
		
		it('should be able to create object instance', function() {
			expect(todo).toBeDefined();
		});
	});
	
});
