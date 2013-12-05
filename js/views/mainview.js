console.log("LOADING mainview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/main', 'bootstrap-js'], 
	function(Backbone, $, _, template) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o) {
			this.options = o;
		},
		render: function() {
			this.$el.html(this.template());
			this.$('#nav').append(this.options.navView.render().el);
			this.$('#left-menu').append(this.options.leftMenuView.render().el);
			this.$('#footer').append(this.options.footerView.render().el);
			return this;
		},
		renderContent: function(view) {
			this.$('#content').html(view.el);  // calls render on init
			return this;
		}
	});
});