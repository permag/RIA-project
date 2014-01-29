console.log("LOADING router.js");

define(['backbone', 'js/views/mainview', 'js/views/navview', 'js/views/leftmenuview',
		'js/views/contentview', 'js/views/footerview', 'js/models/contentmodel', 
		'js/views/todoview', 'js/views/addtodoview', 'js/collections/todocollection', 
		'js/views/todosview', 'js/views/edittodoview'],
		function(Backbone, MainView, NavView, LeftMenuView, ContentView, FooterView, 
				ContentModel, TodoView, AddTodoView, TodoCollection, 
				TodosView, EditTodoView) {
	return Backbone.Router.extend({
		// Routes being used in this application.
		routes: {
			'': 'index',
			'todos': 'listTodos',
			'todos/completed': 'listCompletedTodos',
			'todo/:id': 'showTodo',
			'new': 'newTodo',
			'todo/:id/edit': 'editTodo',
		},

		// Initialize the basic app layout by initialize each sub-view.
		// Pass each view into MainView and render each of them.
		initialize: function(o) {
			this.navView = new NavView();
			this.leftMenuView = new LeftMenuView();
			this.footerView = new FooterView();
			this.mainView = new MainView({
				el: '#main', 
				navView: this.navView,
				leftMenuView: this.leftMenuView,
				footerView: this.footerView
			});
			this.mainView.render();

			// Fetch collection of todos
			this.todoColl = new TodoCollection();
			this.todos = null;
			var self = this;
			this.todoColl.fetch({
				success: function(collection, response) {
					self.todos = collection;
				}
			});
		},

		// Render/update content view only, when chaning content in the app.
		// The view to render is passed as parameter.
		renderContent: function(view) {
			this.mainView.renderContent(view);
		},

		// Index page route when base page is being called.
		// Model is passed into view as parameter.
		index: function() {
			this.listTodos();
			// this.renderContent(new ContentView({contentModel: new ContentModel()}));
		},

		// Route for listing all active todos.
		// Collection is passed into view as parameter.
		listTodos: function() {
			this.renderContent(new TodosView({todoColl: this.todoColl, todos: this.todos, completed: false}));
		},

		// Route for listing completed todos.
		listCompletedTodos: function() {
			this.renderContent(new TodosView({todoColl: this.todoColl, todos: this.todos, completed: true}));
		},

		// Route for displaying one specific todo, by passing id of todo in the url as function parameter.
		showTodo: function(id) {
			this.renderContent(new TodoView({todoColl: this.todoColl, todos: this.todos, todoId: id}));
		},

		// Route for adding new todo.
		newTodo: function() {
			this.renderContent(new AddTodoView({todoColl: this.todoColl, todos: this.todos}));
		},

		// Route for edit specific todo. Id to todo is passed as parameter.
		editTodo: function(id) {
			this.renderContent(new EditTodoView({todoColl: this.todoColl, todos: this.todos, todoId: id}));
		}
	});
});
