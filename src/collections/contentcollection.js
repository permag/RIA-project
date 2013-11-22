console.log("LOADING contentcollection.js");

define(['backbone', 'src/models/contentmodel'], function(Backbone, ContentModel) {
    return Backbone.Collection.extend({
        model: ContentModel,
        url: 'data/content.json'
    });
});