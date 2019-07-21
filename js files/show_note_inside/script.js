"use strict";

var a = document.getElementById('field');

function showNote(anchor, position, html){
	var note = document.createElement('div');
	note.className = "note";
	note.innerHTML = html;
	document.body.appendChild(note);
	
	function getCoords(elem) {
		var box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};

	}

	function positionAt(anchor, position, elem){
		var coords_anchor = getCoords(anchor);
		var coords_elem = getCoords(elem);
		var elem_rect = elem.getBoundingClientRect();
		var anchor_rect = anchor.getBoundingClientRect();
		console.log(coords_anchor.left + ' : ' + coords_anchor.top)
		console.log(coords_elem.left + ' : ' + coords_elem.top)
		var poses = {
			'top_out': [coords_anchor.left, coords_anchor.top - elem_rect.height],
			'right_out': [coords_anchor.left + anchor_rect.width, coords_anchor.top],
			'bottom_out': [coords_anchor.left, coords_anchor.top + anchor_rect.height],
			'top_in': [coords_anchor.left, coords_anchor.top],
			'right_in': [coords_anchor.left + anchor_rect.width - 30, coords_anchor.top],
			'bottom_in': [coords_anchor.left, coords_anchor.top + anchor_rect.height - elem_rect.height],
		}
		elem.style.cssText = 'position: absolute;';
		elem.style.left = poses[position][0] + 'px';
		elem.style.top = poses[position][1] + 'px';
	}
	
	positionAt(anchor, position, note)
}

showNote(a, 'bottom_in', 'hello')