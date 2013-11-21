console.log("LOADING jquery module");

define(['jquery'], function(jQ){
	console.log("Serving up jQuery");
	return jQ;
});