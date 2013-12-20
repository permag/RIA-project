
define(['js/models/todomodel'], function(TodoModel) {

	var todo = new TodoModel();

	describe('A Todo Model', function() {
		
		it('should be able to create object instance', function() {
			expect(todo).toBeDefined();
		});

		it('should be able to toggle done', function() {
			var a = todo.get('done');
			todo.toggle();
			var b = todo.get('done');
			expect(a).not.toBe(b);
		});
	});

	describe('A Todo Model with data', function() {

		var date = new Date();
		var todo = new TodoModel({
			id: 1,
			header: 'header1',
			description: 'description1',
			date: date,
			done: false
		});

		it('should contain correct values', function() {
			expect(todo.get('id')).toBe(1);
			expect(todo.get('header')).toEqual('header1');
			expect(todo.get('description')).toEqual('description1');
			expect(todo.get('date')).toEqual(date);
			expect(todo.get('url')).toEqual('#/todo/1');
		});

		it('should genereate correct url path', function() {
			var id = todo.get('id')
			var url = todo.get('url');
			expect('#/todo/'+id).toBe(url);
		});
	});
});
