console.log("LOADING ListModel.js");

define(['backbone', 'js/models/todomodel'], function(Backbone, TodoModel) {
    return Backbone.RelationalModel.extend({
        defaults: {
            id: 'list_id',
            name: 'undefined',
            todos: []
        },
        idAttribute: 'id',
        relations: [{
            type: Backbone.HasMany,
            key: 'todos',
            relatedModel: TodoModel,
            reverseRelation: {
                key: 'list'
            }
        }]
    });
});
