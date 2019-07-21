"use strict";

var from = document.getElementsByName('from')[0];
var password1 = document.getElementsByName('password1')[0];
var password2 = document.getElementsByName('password2')[0];
var selectTo = document.getElementsByName('to')[0];
var messageArea = document.getElementsByName('message')[0];
var checkButton = document.getElementsByName('checkButton')[0];

var elems = [from, password1, password2, selectTo, messageArea];
var notesBelongs = {};

function informAboutError(elem, errText){
	elem.classList.add('danger');
	if (!(elem.name in notesBelongs)){
		notesBelongs[elem.name] = showNote(elem, errText);
	}
}

function showNote(anchor, text){
	var note = document.createElement('div');
	note.className = "note";
	note.innerText = text;
	document.body.appendChild(note);
	var coords_anchor = anchor.getBoundingClientRect();
	var coords_elem = note.getBoundingClientRect();
	note.style.cssText = 'position: absolute;';
	note.style.left = (coords_anchor.right + coords_elem.height) + 'px';
	note.style.top = coords_anchor.top + 'px';
	return note
}

checkButton.onclick = function(e){
	for (var i = 0; i < elems.length; i++){
		if (!elems[i].value){
			e.preventDefault();
			informAboutError(elems[i], 'Элемент не заполнен');
		}
		else {
			elems[i].classList.remove('danger');
			if (elems[i].name in notesBelongs){
				document.body.removeChild(notesBelongs[elems[i].name]);
				delete notesBelongs[elems[i].name];
			}
		}
	}
	if (!(password1.value === password2.value)){
		e.preventDefault();
		informAboutError(password1, 'Пароли не совпадают');
	}
	console.log(notesBelongs);
}