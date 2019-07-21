"use strict";

var house = document.getElementById('house');
var note;

function showNote(text, elem){
	var note = document.createElement('div');
	note.className = "tooltip";
	note.innerText = text;
	note.id = 'NOTE';
	document.body.appendChild(note);
	var coords = elem.getBoundingClientRect();
	var left = coords.left + (elem.offsetWidth - note.offsetWidth) / 2;
	var top = coords.top - note.offsetHeight - 5;
	
	if (left < 0){ 
		left = 0; // не вылезать за левую границу экрана
	}

	// не вылезать за верхнюю границу окна
	if (top < 0) {
		top = coords.top + elem.offsetHeight + 5;
	}

	note.style.left = left + 'px';
	note.style.top = top + 'px';
	
	return note;
}

function showNoteOnMouseOwer(e){

    // ВАЖНО: mouseover может сработать сразу на потомке
    // минуя родителя (при быстром движении мышью)

    // пройти вверх до первого элемента с data-tooltip
	var target = e.target;
    while (target !== this){
		var tooltip = target.getAttribute('data-tooltip');
        if (tooltip) break;
        target = target.parentNode;
    }
	
	if (!tooltip){ 
		return;
	}
	
	note = showNote(tooltip, target);

}

function deleteCreatedNote(){
	if (note){
		document.body.removeChild(note);
		note = false;
	}
}

document.addEventListener('mouseover', showNoteOnMouseOwer);
document.addEventListener('mouseout', deleteCreatedNote);