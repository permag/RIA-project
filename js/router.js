console.log("LOADING router.js");

define(['backbone', 'js/views/mainview', 'js/views/navview', 'js/views/leftmenuview',
		'js/views/contentview', 'js/views/footerview', 'js/models/contentmodel',
		'js/views/listview', 'js/models/todomodel', 'js/models/listmodel', 'js/views/todoview'],
		function(Backbone, MainView, NavView, LeftMenuView, ContentView, FooterView, 
				ContentModel, ListView, TodoModel, ListModel, TodoView) {
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'hej/:id': 'hej',
			'lists': 'show_lists',
			'show_todo': 'show_todo'
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
		hej: function(id) {
			if (id) {
				alert(id);
			}
		},
		show_lists: function() {
			this.renderContent(new ListView());
		},
		show_todo: function() {
			// Testing relations...
			//
			
			// Testing relations...
			// New list of todos
/*			if (!this.listModel) {
				this.listModel = new ListModel({
					id: 'list_1',
					name: 'First list',
					todos: []
				});
			}
			// New todo
			if (!this.todo1) {
				this.todo1 = new TodoModel({
					id: 'todo_1',
					header: 'First todo',
					description: 'Some description...',
					date: 'undefined',
					done: false,
					list: 'list_1'
				});
			}
			// Another new todo
			if (!this.todo2) {
				this.todo2 = new TodoModel({
					id: 'todo_2',
					header: 'Second todo',
					description: 'Some description...',
					date: 'undefined',
					done: false,
					list: 'list_1'
				});
			}
			// A third new todo
			if (!this.todo3) {
				this.todo3 = new TodoModel({
					id: 'todo_3',
					header: 'Third todo',
					description: 'Some description...',
					date: 'undefined',
					done: false,
					list: 'list_1'
				});
			}


			
			
			
			console.log(this.listModel.toJSON());
			console.log("LENGTH: " + this.listModel.get('todos').length);
			console.log("HEHE: " + this.listModel.get('todos').at(1).get('header'));
			
			console.log(this.listModel.get('todos').pluck('header'))
			console.log(this.todo2.get('list').get('name'));
			console.log("DONE? " + this.todo1.get('done'));
			this.todo1.toggle();
			console.log("DONE? " + this.todo1.get('done'));*/
			
			// Render this view
			this.renderContent(new TodoView());
		}
	});
});
