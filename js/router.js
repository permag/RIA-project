console.log("LOADING router.js");

define(['backbone', 'js/views/mainview', 'js/views/navview', 'js/views/leftmenuview',
		'js/views/contentview', 'js/views/footerview', 'js/models/contentmodel',
		'js/collections/listcollection', 'js/views/listview', 'js/models/todomodel',
		'js/models/listmodel', 'js/views/todoview'],
	function(Backbone, MainView, NavView, LeftMenuView, ContentView, FooterView, 
			ContentModel, ListCollection, ListView, TodoModel, ListModel, TodoView) {
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'hej/:id': 'hej',
			'lists': 'show_lists',
			'show_todo': 'show_todo'
		},
		initialize: function(o) {
			// ...
		},
		mainRender: function(view) {
			var navView = new NavView(),
			leftMenuView = new LeftMenuView(),
			footerView = new FooterView(),
			mainView = new MainView({
				el: '#main', 
				navView: navView,
				leftMenuView: leftMenuView,
				contentView: view,
				footerView: footerView
			});
			mainView.render();	
		},
		index: function() {
			// Render this view
			this.mainRender(new ContentView({contentModel: new ContentModel()}));
		},
		hej: function(id) {
			if (id) {
				alert(id);
			}
		},
		show_lists: function() {
			this.mainRender(new ListView({listCollection: new ListCollection()}));
		},
		show_todo: function() {
			// Testing relations...
			// New list of todos
			var listModel = new ListModel({
				id: 'list_1',
				name: 'First list',
				todos: []
			});
			// New todo
			var todo1 = new TodoModel({
				id: 'todo_1',
				header: 'First todo',
				description: 'Some description...',
				date: 'undefined',
				done: false,
				list: 'list_1'
			});
			// Another new todo
			var todo2 = new TodoModel({
				id: 'todo_2',
				header: 'Second todo',
				description: 'Some description...',
				date: 'undefined',
				done: false,
				list: 'list_1'
			});


			//
			listModel.get('todos').push('todo_1');
			listModel.get('todos').push('todo_2');
			console.log("LENGTH: " + listModel.get('todos').length);
			console.log("HEHE: " + listModel.get('todos').at(1).get('header'));
			
			console.log(listModel.get('todos').pluck('header'))
			console.log(todo2.get('list').get('name'));
			
			// Render this view
			this.mainRender(new TodoView({contentModel: todo1}));

		}
	});
});