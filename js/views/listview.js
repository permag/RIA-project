console.log("LOADING listview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/list', 
		'js/collections/listcollection'], 
	function(Backbone, $, _, template, ListCollection) {
	return Backbone.View.extend({
		template: template,
		data: null,
		initialize: function(o) {
			var self = this;
			this.coll = new ListCollection();
			//this.coll = o.listColl;
			this.coll.fetch({
				success: function(collection, response) {
					self.data = collection.toJSON();
					self.render();
				}
			});
		},
		render: function() {
			this.$el.html(this.template(this));
			console.log(this.coll.toJSON());
			return this;
		}
	});
});
