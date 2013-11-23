console.log("LOADING contentmodel.js");

define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
		initialize: function(o) {
			// ...
		},
		onePlusOneTest: function(a, b) {
		    return a + b;
		}
	});
});