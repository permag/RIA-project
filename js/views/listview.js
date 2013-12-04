console.log("LOADING listview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/list', 'js/collections/listcollection'], 
	function(Backbone, $, _, template, ListCollection) {
	return Backbone.View.extend({
		template: template,
		data: null,
		initialize: function(o) {
			var self = this;
			this.options = o;
			this.collection = new ListCollection();
			this.collection.fetch({
				success: function(collection, response) {
					self.data = collection;
					console.log(collection);
					self.render();
				}
			});
		},
		render: function() {
			this.$el.html(this.template(this.data));
			return this;
		}
	});
});