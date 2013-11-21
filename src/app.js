console.log("LOADING app.js");

define(['backbone', 'src/views/mainview', 'src/views/navview', 'src/views/contentview', 'src/views/footerview'],
	function(Backbone, MainView, NavView, ContentView, FooterView) {
	return {
		start: function() {
			var navView = new NavView(),
				contentView = new ContentView(),
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