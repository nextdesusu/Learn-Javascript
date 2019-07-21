"use strict";

function parseInt(str){
	var res = '';
	for (var i = 0; i < str.length; ++i){
		if (!isNaN(Number(str[i]))){
			res += str[i];
		}
		else {
			break;
		}
	}
	return Number(res);
}

var mouse = document.getElementById("mouse");

var currentX = parseInt(getComputedStyle(mouse).left);
var currentY = parseInt(getComputedStyle(mouse).top);

mouse.onfocus = function(){
	mouse.onkeydown = function(e){
		var key = e.keyCode;
		if (key == 37){
			currentX -= 50;
		}
		else if (key == 39){
			currentX += 50;
		}
		else if (key == 38){
			currentY -= 50
		}
		else if (key == 40){
			currentY += 50
		}
		mouse.style.left = currentX + "px";
		mouse.style.top = currentY + "px";
	}
}