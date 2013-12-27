console.log("LOADING TodoModel.js");

define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		// Default values for todo object.
		defaults: {
			id: 0,
			header: 'undefined',
			description: 'undefined',
			date: 'undefined',
			done: false,
			url: ''
		},
		url: 'data/empty.json',
		
		// Initialize function.
		// When creating new model, createUrl and createDate functions are called,
		// to create a url to the specific todo, used in the template,
		// and to format the time and date.
		initialize: function(o) {
			if (this.get('url') == '' ) {
				this.createUrl();
			}
			if (this.get('date') == 'undefined') {
				this.createDate();
			}
		},

		// Changes and saves done status from true to false, vise versa.
		toggle: function() {
			this.save({done: !this.get('done')});
		},

		// Stores the router url to the specific todo in the model, for
		// simpler access when creating links in the templates.
		createUrl: function() {
			this.save({url: '#/todo/' + this.get('id')});
		},

		// Formats the time and date of the todo and saves it on the model.
		createDate: function() {
			var date = new Date();
			var yeah = date.getFullYear();
			var month = date.getMonth()+1;
			var day = date.getDate();
			var hour = date.getHours();
			var minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
			var full = yeah + '-' + month + '-' + day + ' ' + hour + ':' + minute;
			this.save({date: full});
		}
	});
});
