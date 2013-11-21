console.log("LOADING footerview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/footer'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o) {
			// ...
		},
		render: function() {
			this.$el.html(this.template({message: "Temp footer text"}));
			this.$el.children('p').hide(); // temp
			return this;
		}
	});
});