console.log("LOADING mainview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/main'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o) {
			this.options = o;
		},
		render: function() {
			this.$el.html(template({someThing: 'someValue'}));
			this.$('#nav').append(this.options.navView.render().el);
			this.$('#content').append(this.options.contentView.render().el);
			this.$('#footer').append(this.options.footerView.render().el);
			return this;
		}
	});
});