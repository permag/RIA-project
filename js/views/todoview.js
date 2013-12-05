console.log("LOADING todoview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/list'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		model: null,
		initialize: function(o) {
			this.options = o;
			this.model = o.contentModel;
			console.log(this.model.toJSON());
			this.render();
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});
