console.log("LOADING contentview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/content'], 
	function(Backbone, $, _, template, model) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o) {
			this.options = o;
		},
		render: function() {
			this.$el.html(this.template(this.options.contentModel.getContent()));
			return this;
		}
	});
});