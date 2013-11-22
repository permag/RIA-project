console.log("LOADING contentmodel.js");

define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        initialize: function(o) {
            // ...  
        },
        getData: function() {
            return {
                values: {
                    header1: "Hello, world!",
                    header2: "Hej, världen!",
                    author: "PER /\\/\\"
                }
            };
        }
    });
});