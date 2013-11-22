console.log("LOADING contentview.js");

define(['backbone', 'jquery', 'underscore', 'jade!templates/content', 'src/collections/contentcollection'], 
	function(Backbone, $, _, template, ContentCollection) {
	return Backbone.View.extend({
		template: template,
		initialize: function(o) {
            var that = this;
			this.options = o;
            this.coll = new ContentCollection();
            this.coll.fetch({
                success: function(collection, response) {
                    that.$el.html(template(collection.toJSON()[0]));
                    return that;
                }
            });
        }
        
        /*render: function() {
            console.log("2: ");
            //console.log(this.options.contentModel.getContent())
            //this.$el.html(this.template(this.options.contentModel.getContent()));
            this.$el.html(this.template(data));
			return this;
		}*/
	});
});