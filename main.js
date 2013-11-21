
console.log("LOADING main.js");

require.config({
	paths: {
		//
		jade: 'lib/require/load_jade-v0.27.6',
		// dirs
		templates: 'templates',
		//
		jquery: 'lib/jquery/jquery-v2.0.3',
		pureunderscore: 'lib/underscore/underscore-v1.5.2',
		purebackbone: 'lib/backbone/backbone-v1.1.0',
		'bb-rel': 'lib/backbone/backbone-relational-v0.7.1',
		'bb-loc': 'lib/backbone/backbone-localstorage-v1.1.6',
		backbone: 'lib/backbone/backbone-module',
        underscore: 'lib/underscore/underscore-module'
    },
	map: {
		'*': { 'jquery': 'lib/jquery/jquery-module'},
		'lib/jquery/jquery-module': { 'jquery': 'jquery' }
	},
	shim: {
		jquery: { exports: 'jQuery' },
		pureunderscore: { exports: '_' },
		purebackbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'bb-rel': ['purebackbone', 'pureunderscore'],
		'bb-loc': ['purebackbone', 'pureunderscore']
	}
});


require(['js/app'], function(App) { 
	App.start(); 
});