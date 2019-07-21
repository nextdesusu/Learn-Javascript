"use strict";

function createNote(anchor, position, html, className){
	var note = document.createElement('div');
	note.className = className;
	note.innerHTML = html;
	document.body.appendChild(note);
	return note;
}

function positionAt(anchor, position, elem){

	function getCoords(elem) {
		var box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};

	}
	var coords_anchor = getCoords(anchor);
	var coords_elem = getCoords(elem);
	var elem_rect = elem.getBoundingClientRect();
	var anchor_rect = anchor.getBoundingClientRect();
	
	var poses = {
		'out': [coords_anchor.left, coords_anchor.top - elem_rect.height],
		'in': [coords_anchor.left, coords_anchor.top - coords_elem.height],
	}
	elem.style.cssText = 'position: absolute;';
	elem.style.left = poses[position][0] + 'px';
	elem.style.top = poses[position][1] + 'px';
}

var p = document.createElement('p');
p.innerText = 'Какаойто текст, Какаойто текст, Какаойто текст, Какаойто текст, Какаойто текст, Какаойто текст...';
document.body.appendChild(p);
var label = document.createElement('label');
label.innerText = 'Ввод';
var input = document.createElement('input');
input.type = 'text';

var text = "Введите текст";

var note = createNote(input, 'top', text, 'cutePlaceholder');

input.onfocus = function(){
	positionAt(input, 'out', note)
}

input.onblur = function(){
	if (input.value){
		note.hidden = true;
	} 
	else {
		note.hidden = false;
	}
	positionAt(input, 'in', note);
}

label.appendChild(input);
document.body.appendChild(label);
positionAt(input, 'in', note);