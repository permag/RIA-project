console.log("LOADING TodoCollection.js");

define(['backbone', 'js/models/todomodel'], function(Backbone, TodoModel) {
	return Backbone.Collection.extend({
		// Model being used for this collection.
		model: TodoModel,

		// The localStorage where this collection is stored.
		localStorage: new Backbone.LocalStorage('todo-store')
	});
});
