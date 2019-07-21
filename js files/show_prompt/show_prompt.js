"use strict";

var button = document.createElement('button');
button.innerText = 'click';

function parseInt(str){
	var res = '';
	for (var i = 0; i < str.length; i++){
		var Char = str[i];
		if (!isNaN(Number(Char))){
			res += Char;
		}
		else {
			break;
		}
	}
	return Number(res);
}

button.onclick = function(){
	showPrompt("Введите что-нибудь<br>... умное :)", function(value) {
		alert( value );
	});
}

document.body.appendChild(button);

function getSize(elem){
	var elem = getComputedStyle(elem);
	return {
		'width': parseInt(elem.width),
		'height': parseInt(elem.height),
	}
}

function createForm(id, labelName, placeholder, func){
	var form = document.createElement('form');
	var label = document.createElement('label');
	var input = document.createElement('input');
	var submit = document.createElement('input');
	var cancel = document.createElement('button');
	var br = document.createElement('br');
	form.method = 'GET';
	form.action = '';
	form.id = id;
	label.innerHTML = labelName;
	input.setAttribute('placeholder', placeholder);
	input.type = 'text';
	submit.type = 'submit';
	submit.value = 'Ok';
	cancel.innerText = 'Cancel';
	cancel.onclick = function(e){
		e.preventDefault();
		func(null);
		form.parentNode.removeChild(form);
	}
	label.appendChild(input);
	form.appendChild(label);
	form.appendChild(br);
	form.appendChild(submit);
	form.appendChild(cancel);
	form.onsubmit = function(e){
		e.preventDefault();
		func(input.value);
		form.parentNode.removeChild(form);
	};
	document.body.appendChild(form);
	form.style.left = ((screen.width  - getSize(form).width) / 2) + 'px';
	form.style.top = ((screen.height - getSize(form).height) / 2) + 'px';
	input.focus();
	return form;
}

function showPrompt(text, func){
	var form = createForm('myForm', text, 'Вводите...', func);
};