console.log("LOADING ListModel.js");

define(['backbone', 'underscore', 'js/models/todomodel', 'js/collections/todocollection'], 
	function(Backbone, _, TodoModel, TodoCollection) {
	return Backbone.RelationalModel.extend({
		defaults: {
			id: 'list_id',
			name: 'undefined',
			todos: []
		},
		relations: [{
			type: Backbone.HasMany,
			key: 'todos',
			relatedModel: TodoModel,
			reverseRelation: {
				key: 'list'
				//includeInJSON: 'id'
			}
		}]
	});
});
