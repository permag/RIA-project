console.log("LOADING TodoModel.js");

define(['backbone'], function(Backbone) {
	return Backbone.RelationalModel.extend({
		defaults: {
			id: 0,
			header: 'undefined',
			description: 'undefined',
			date: 'undefined',
			done: false,
			url: '',
			list: 'list_id'
		},
		//localStorage: new Backbone.LocalStorage('todo-store'),
		initialize: function() {
			this.set({'url': '#/todo/' + this.get('id')});
		},
		toggle: function() {
			this.set({'done': !this.get('done')});
		}
	});
});
