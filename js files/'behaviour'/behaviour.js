var note = document.createElement('div');
note.className = 'note';
note.id = 'helpNote'

function center(elem){
	return elem.height / 2
}

function positionAt(anchor, elem){
	var INDENT = 5;
	var coords_anchor = anchor.getBoundingClientRect();
	var coords_elem = elem.getBoundingClientRect();
	var position;
	var poses = {
		'top': [coords_anchor.left, coords_anchor.top - coords_elem.height - INDENT],
		'bottom': [coords_anchor.left, coords_anchor.top + coords_anchor.height + INDENT],
	}
	if (poses['top'][1] > window.pageYOffset - (coords_elem.height + INDENT)){
		position = 'top';
	}
	else {
		position = 'bottom';
	}
	if (coords_anchor.width > coords_elem.width){
		poses['top'] = [coords_anchor.left + center(coords_anchor), coords_anchor.top - coords_elem.height - INDENT]
		poses['bottom'] = [coords_anchor.left + center(coords_anchor), coords_anchor.top + coords_anchor.height + INDENT];
	}
	elem.style.cssText = 'position: fixed;';
	elem.style.left = poses[position][0] + 'px';
	elem.style.top = poses[position][1] + 'px';
}
	

function showToolTip(e){
	var target = e.target;
	var action = target.getAttribute('data-tooltip');
	if (action){
		document.body.appendChild(note);
		note.innerHTML = action;
		positionAt(target, note)
	}
}

function hideToolTip(e){
	var target = e.target
	var action = target.getAttribute('data-tooltip');
	if (action){
		var helpNote = document.getElementById('helpNote')
		document.body.removeChild(helpNote);
	}
}

document.addEventListener('mouseover', showToolTip)
document.addEventListener('mouseout', hideToolTip)