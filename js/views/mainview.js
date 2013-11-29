console.log("LOADING mainview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/main', 'bootstrap-js'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o) {
			this.options = o;
		},
		render: function() {
			this.$el.html(this.template({someThing: 'someValue'}));
			this.$('#nav').append(this.options.navView.render().el);
			this.$('#left-menu').append(this.options.leftMenuView.render().el);
			this.$('#content').append(this.options.contentView.el);  // renders on init
			this.$('#footer').append(this.options.footerView.render().el);
			return this;
		}
	});
});