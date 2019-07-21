"use strict";

var elem = document.getElementById('text');
var button = document.getElementById('button');

function hideText(elem){
	return function(){
		elem.style.display = "none";
	}
}

button.addEventListener('click', hideText(elem));