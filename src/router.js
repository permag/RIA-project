console.log("LOADING router.js");

define(['backbone', 'src/views/mainview', 'src/views/navview', 'src/views/contentview', 
        'src/views/footerview', 'src/models/contentmodel'],
	function(Backbone, MainView, NavView, ContentView, FooterView, ContentModel) {
    return Backbone.Router.extend({
		routes: {
            '': 'index'
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
		}
	});
});