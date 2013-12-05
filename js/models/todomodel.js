console.log("LOADING TodoModel.js");

define(['backbone'], function(Backbone) {
    return Backbone.RelationalModel.extend({
        defaults: {
            id: 'todo_id',
            header: 'undefined',
            description: 'undefined',
            date: 'undefined',
            done: false,
            list: 'list_id'
        },
        idAttribute: 'id',
        toggle: function() {
			this.set({'done': !this.get('done')});
        }
    });
});
