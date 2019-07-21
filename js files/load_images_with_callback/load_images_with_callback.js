"use strict";

var image_sources = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];

alert('start');

function callbackFunc(){
	alert('loaded');
}

function preloadImages(sources, callback){
	var timersDone = {};
	var imgTemplate = document.createElement('img'); 
	for (var i = 0; i < sources.length; ++i){
		var currentImg = sources[i];
		timersDone[currentImg] = false;
		var new_img = imgTemplate.cloneNode(false);
		new_img.src = currentImg;
		new_img.onload = new_img.onerror = function(){
			timersDone[currentImg] = true;
		}
	}
	var keys = Object.keys(timersDone);
	console.log(keys);
	while (true){
		var allDone = true;
		for (var i = 0; i < keys.length; ++i){
			if (!keys[i]){
				allDone = false;
			}
			else {
				console.log(keys[i] + ' loaded');
			}
		}
		if (allDone){
			break;
		}
	}
	callback();
}

preloadImages(image_sources, callbackFunc);