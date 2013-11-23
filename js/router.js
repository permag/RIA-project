console.log("LOADING router.js");

define(['backbone', 'js/views/mainview', 'js/views/navview', 'js/views/contentview', 
        'js/views/footerview', 'js/models/contentmodel'],
	function(Backbone, MainView, NavView, ContentView, FooterView, ContentModel) {
    return Backbone.Router.extend({
		routes: {
            '': 'index',
            'hej/:id': 'hej'
        },
		initialize: function(o) {
			// ...
		},
		index: function() {
            var contentModel = new ContentModel(),
			navView = new NavView(),
			contentView = new ContentView({contentModel: contentModel}),
			footerView = new FooterView(),
			mainView = new MainView({
				el: '#main', 
				navView: navView, 
				contentView: contentView,
				footerView: footerView
			});
			mainView.render();
		},
		hej: function(id) {
            if (id) {
                alert(id);
                //this.index();
            }
            return "hej";
		}
	});
});