console.log("LOADING ListModel.js");

define(['backbone', 'underscore', 'js/models/todomodel'], 
	function(Backbone, _, TodoModel) {
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
