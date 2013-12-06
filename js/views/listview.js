console.log("LOADING listview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/list', 
		'js/collections/listcollection', 'js/models/listmodel'], 
	function(Backbone, $, _, template, ListCollection, ListModel) {
	return Backbone.View.extend({
		template: template,
		data: null,
		initialize: function(o) {
			var self = this;
			this.collection = new ListCollection();
			this.collection.fetch({
				success: function(collection, response) {
					self.data = collection.toJSON();
					console.log(collection.toJSON());
					if (collection.length === 0) {
						self.newList();
					}
					self.render();
				}
			});
		},
		render: function() {
			this.$el.html(this.template(this));
			console.log(this.collection.get('list_1').toJSON());
			return this;
		},
		
		
		
		newList: function() {
			console.log("LIST CREATED");
			this.list = new ListModel({
				id: 'list_1',
				name: 'First lista',
				todos: []
			});
			this.collection.create(this.list);
		}
	});
});