"use strict";

function showAndUpdate(some, key, time){
	setInterval(function(){
		if (key){
			console.log(some()[key])
		}
		else {
			console.log(some)
		}
	}, time)
}

function getDocumentScroll(){
	var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
	);
	var top = window.pageYOffset;
	var bottom = window.pageYOffset + document.documentElement.clientHeight;
	var height = scrollHeight;
	return {
		'top': top,
		'bottom': bottom,
		'height': height,
	}
}

showAndUpdate(getDocumentScroll, 'height', 1000)