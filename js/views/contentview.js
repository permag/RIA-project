console.log("LOADING contentview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/content', 'js/collections/contentcollection'], 
	function(Backbone, $, _, template, ContentCollection) {
	return Backbone.View.extend({
		template: template,
		data: null,
		initialize: function(o) {
			var self = this;
			this.options = o;
			this.collection = new ContentCollection();
			this.collection.fetch({
				success: function(collection, response) {
					self.data = collection.toJSON()[0];
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