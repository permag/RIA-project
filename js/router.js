console.log("LOADING router.js");

define(['backbone', 'js/views/mainview', 'js/views/navview', 'js/views/leftmenuview',
		'js/views/contentview', 'js/views/footerview', 'js/models/contentmodel',
		'js/views/listview', 'js/models/todomodel', 'js/models/listmodel', 'js/views/todoview',
		'js/views/addtodoview', 'js/collections/listcollection', 'js/collections/todocollection'],
		function(Backbone, MainView, NavView, LeftMenuView, ContentView, FooterView, 
				ContentModel, ListView, TodoModel, ListModel, TodoView, AddTodoView,
				ListCollection, TodoCollection) {
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'lists': 'show_lists',
			'todo/:id': 'show_todo',
			'new': 'newTodo'
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
			
			// testing
			this.listColl = new ListCollection();
			if (!localStorage.getItem('todo-list-store')) {
				this.listModel = new ListModel({
					id: 'list_1',
					name: 'First list',
					todos: []
				});
				this.listColl.create(this.listModel);
			}
			this.listColl.fetch();
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
		show_lists: function() {
			this.renderContent(new ListView({listColl: this.listColl}));
		},
		show_todo: function(id) {
			this.renderContent(new TodoView({todoColl: new TodoCollection(), todoId: id}));
		},
		newTodo: function() {
			this.renderContent(new AddTodoView({listModel: this.listColl.at(0)}));
		}
	});
});
