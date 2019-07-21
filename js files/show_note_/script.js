"use strict";

var a = document.getElementById('field');

function showNote(anchor, position, html){
	var note = document.createElement('div');
	note.className = "note";
	note.innerHTML = html;
	document.body.appendChild(note);

	function positionAt(anchor, position, elem){
		var coords_anchor = anchor.getBoundingClientRect();
		var coords_elem = elem.getBoundingClientRect();
		var poses = {
			'top': [coords_anchor.left, coords_anchor.top - coords_elem.height],
			'right': [coords_anchor.right + coords_elem.height, coords_anchor.top],
			'bottom': [coords_anchor.left, coords_anchor.bottom + coords_elem.height],
		}
		elem.style.cssText = 'position: absolute;';
		elem.style.left = poses[position][0] + 'px';
		elem.style.top = poses[position][1] + 'px';
	}
	
	positionAt(anchor, position, note)
}

showNote(a, 'right', 'hello')