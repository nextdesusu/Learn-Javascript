"use strict";

var scriptsSources = ['a.js', 'b.js', 'c.js'];

function addScripts(scriptsList, callback){
	var scriptTagTemplate = document.createElement('script');
	var scriptsLoadedCounter = 0;
	var scriptsAmount = scriptsList.length;
	for (var i = 0; i < scriptsAmount; ++i){
		var scripSrc = scriptsList[i];
		var newScript = scriptTagTemplate.cloneNode(false);
		newScript.src = scripSrc;
		newScript.onload = function(){
			++scriptsLoadedCounter;
		}
		document.body.append(newScript);
	}
	
	function isAllLoaded(){
		return scriptsLoadedCounter === scriptsAmount;
	}
	
	var checkInterval = setInterval(function(){
		if (isAllLoaded()){
			clearInterval(checkInterval);
			callback();
		}
	}, 100);
}

addScripts(scriptsSources, function(){ main() });