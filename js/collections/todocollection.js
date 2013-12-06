console.log("LOADING TodoCollection.js");

define(['backbone', 'js/models/todomodel'], function(Backbone, TodoModel) {
    return Backbone.Collection.extend({
        model: TodoModel,
        localStorage: new Backbone.LocalStorage('todo-store')
    });
});
