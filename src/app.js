console.log("LOADING app.js");

define(['backbone', 'src/views/mainview', 'src/views/navview', 'src/views/contentview'],
	function(Backbone, MainView, NavView, ContentView) {
		return {
			start: function() {
				var navView = new NavView(),
					contentView = new ContentView(),
					mainView = new MainView({
						el: '#main', 
						navView: navView, 
						contentView: contentView
					});
				mainView.render();
				Backbone.history.start();
			}
		}
	});