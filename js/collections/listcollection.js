console.log("LOADING ListCollection.js");

define(['backbone', 'js/models/listmodel'], function(Backbone, ListModel) {
    return Backbone.Collection.extend({
        model: ListModel,
        localStorage: new Backbone.LocalStorage('todo-list-store')
    });
});
