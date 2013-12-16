console.log("LOADING TodoModel.js");

define(['backbone', 'js/models/listmodel'], function(Backbone, ListModel) {
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

		url: '/',
		initialize: function(o) {
			this.save({'url': '#/todo/' + this.get('id')});
		},
		toggle: function() {
			this.save({'done': !this.get('done')});
		}
	});
});
