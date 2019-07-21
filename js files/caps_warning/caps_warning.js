"use strict";

var nameInput = document.getElementById("nameInput");
nameInput.onclick = function(){
	this.focus();
}

var warning = document.createElement('p');
warning.style.color = 'red';
warning.hidden = true;
warning.innerText = 'Включен капслок!!!';
document.body.appendChild(warning);

nameInput.onfocus = function(){
	var self = this;
	
	self.onkeyup = function(e){
		var nextLetter = self.value[self.value.length - 1];
		if (nextLetter && nextLetter !== nextLetter.toLowerCase()){
			warning.hidden = false;
		}
		else {
			warning.hidden = true;
		}
	}
	
}