console.log("LOADING contentview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/content'], function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o) {},
		render: function() {
			var contentObject = {
				header1: "Hello, world!",
				header2: "Hej, världen!"
			};
			this.$el.html(this.template(contentObject));
			return this;
		}
	});
});