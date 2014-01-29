
define(['js/models/todomodel'], function(TodoModel) {

	var todo = new TodoModel();
	todo.url = '../data/empty.json';

	describe('A Todo Model', function() {
		// Create instance
		it('should be able to create object', function() {
			expect(todo).toBeDefined();
		});

		it('should be able to create object instance', function() {
			expect(todo instanceof TodoModel).toBeTruthy();
		});

		// Test toggle done status
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
			date: date
		}, '../data/empty.json');

		// Test url to todo
		it('should generate correct url path', function() {
			var id = todo.get('id');
			var url = todo.get('url');
			expect('#/todo/'+id).toBe(url);
		});

		// Test getter functions on default properties
		describe('has property getter functions that', function() {
			it('should return correct id', function() {
				expect(todo.get('id')).toBe(1);
			});
			it('should return correct header', function() {
				expect(todo.get('header')).toEqual('header1');
			});
			it('should return correct description', function() {
				expect(todo.get('description')).toEqual('description1');
			});
			it('should return correct date', function() {
				expect(todo.get('date')).toEqual(date);
			});
			it('should return correct status', function() {
				expect(todo.get('done')).toBe(false);
			});
			it('should return correct url', function() {
				expect(todo.get('url')).toEqual('#/todo/1');
			});
		});

	});
});
