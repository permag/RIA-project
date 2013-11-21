define(['backbone', 'jquery'], function(Backbone, $) {
	return Backbone.View.extend({
		initialize: function() {
			console.log("RENDERING myview.js");
		},
		render: function() {
			$('#message').append("HEEJJ");
			return this;
		}
	});
});