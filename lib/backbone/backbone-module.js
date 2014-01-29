console.log("LOADING backbone-module.js");

define(['purebackbone', 'bb-rel', 'bb-loc'], function(BB) {
	BB.noConflict();
	delete window.Store;
	return BB;
});