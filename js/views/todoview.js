console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/list'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		data: null,
		initialize: function(o) {
			var self = this;
			this.options = o;
			this.data = o.contentModel;
		},
		render: function() {
			this.$el.html(this.template(this.data));
			return this;
		}
	});
});