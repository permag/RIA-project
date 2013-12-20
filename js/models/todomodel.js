console.log("LOADING TodoModel.js");

define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults: {
			id: 0,
			header: 'undefined',
			description: 'undefined',
			date: 'undefined',
			done: false,
			url: ''
		},
		url: 'data/empty.json',
		
		initialize: function() {
			this.save({url: '#/todo/' + this.get('id')});
		},

		toggle: function() {
			this.save({done: !this.get('done')});
		}
	});
});
