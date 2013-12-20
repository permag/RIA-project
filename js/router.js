console.log("LOADING router.js");

define(['backbone', 'js/views/mainview', 'js/views/navview', 'js/views/leftmenuview',
		'js/views/contentview', 'js/views/footerview', 'js/models/contentmodel', 
		'js/models/todomodel', 'js/views/todoview', 'js/views/addtodoview', 
		'js/collections/todocollection', 'js/views/todosview', 'js/views/edittodoview'],
		function(Backbone, MainView, NavView, LeftMenuView, ContentView, FooterView, 
				ContentModel, TodoModel, TodoView, AddTodoView, TodoCollection, 
				TodosView, EditTodoView) {
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'todos': 'list_todos',
			'todo/:id': 'show_todo',
			'new': 'newTodo',
			'todo/:id/edit': 'editTodo',
		},
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
		},
		// Render/update content view only
		renderContent: function(view) {
			this.mainView.renderContent(view);
		},
		index: function() {
			// Render this view
			this.renderContent(new ContentView({contentModel: new ContentModel()}));
		},
		list_todos: function() {
			this.renderContent(new TodosView({todoColl: new TodoCollection()}));
		},
		show_todo: function(id) {
			this.renderContent(new TodoView({todoColl: new TodoCollection(), todoId: id}));
		},
		newTodo: function() {
			this.renderContent(new AddTodoView());
		},
		editTodo: function(id) {
			this.renderContent(new EditTodoView({todoId: id}));
		}
	});
});
