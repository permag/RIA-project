console.log("LOADING backbone-module.js");

define(['purebackbone', 'bb-rel', 'bb-loc'], function(BB) {
	console.log("Serving up backbone");
	BB.noConflict();
	delete window.Store;
	return BB;
});