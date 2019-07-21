"use strict";

function addScript(src, callback){
	var scriptTag = document.createElement('script');
	scriptTag.src = src;
	console.log('loaded');
	scriptTag.onload = function(){
		callback();
	}
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(scriptTag, s); // перед ним и вставим
}

addScript("go.js", function() {
  go();
});