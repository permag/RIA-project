console.log("LOADING leftmenu.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/leftmenu'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o){
			// ...
		},
		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});
});