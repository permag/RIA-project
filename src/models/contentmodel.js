console.log("LOADING model.js");

define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        initialize: function(o) {
            // ...  
        },
        getContent: function() {
            return {
                phase1: {
                    header1: "Hello, world!",
                    header2: "Hej, världen!",
                    author: "PER /\\/\\"
                }
            };
        }
    });
});