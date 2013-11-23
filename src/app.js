console.log("LOADING app.js");

define(['backbone', 'src/views/mainview', 'src/views/navview', 'src/views/contentview', 'src/views/footerview', 'src/models/contentmodel'],
	function(Backbone, MainView, NavView, ContentView, FooterView, ContentModel) {
	return {
		start: function() {
			var contentModel = new ContentModel();
			var navView = new NavView(),
			contentView = new ContentView({contentModel: contentModel}),
			footerView = new FooterView(),
			mainView = new MainView({
				el: '#main', 
				navView: navView, 
				contentView: contentView,
				footerView: footerView
			});
			mainView.render();
			Backbone.history.start();
		}
	}
});