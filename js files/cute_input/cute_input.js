"use strict";

var passInput = document.getElementById("passInput");

function createNote(anchor, position, text){
	var note = document.createElement('div');
	note.className = "note";
	note.innerText = text;
	document.body.appendChild(note);
	var coords_anchor = getCoords(anchor);
	note.style.cssText = 'position: absolute;';
	note.style.left = coords_anchor.left + 'px';
	note.style.top = coords_anchor.top + 'px';
	note.style.color = 'red';
	
	function getCoords(elem) {
		var box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};

	}
	
	return note;
}

var note = createNote(passInput, 'top_in', 'Введи пароль');
var removed = false;

passInput.onclick = function(){
	passInput.focus();
}

passInput.onfocus = function(){
	if (!removed){
		document.body.removeChild(note);
		removed = true;
	}
}