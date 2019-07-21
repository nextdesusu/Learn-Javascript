"use strict";

var newTextarea = document.createElement('textarea');
var htmls = ["<strong>Northwest</strong><br>Metal<br>Silver<br>Elders", "<strong>North</strong><br>Water<br>Blue<br>Change", "<strong>Northeast</strong><br>Earth<br>Yellow<br>Direction"];

var cancelButton = document.createElement('button');
cancelButton.innerText = 'cancel';
var applyButton = document.createElement('button');
applyButton.innerText = 'apply';

var table = document.createElement('table');
var newTd = document.createElement('td');

var alreadyInRedact = false;

function parseInt(str){
	var res = '';
	for (var i = 0; i < str.length; i++){
		if (!isNaN(Number(str[i]))){
			res += str[i];
		}
		else {
			break;
		}
	}
	return Number(res);
}

function redact(){
	if (alreadyInRedact){
		return;
	}
	alreadyInRedact = true;
	/*
	this.innerHTML = "<textarea id = 'TextareaOfThis'>" + thisHtml + "</textarea>";
	//var textarea = newTextarea.cloneNode(false);
	var textareaOfThis = document.getElementById('TextareaOfThis');
	//textarea.value = thisHtml;
	*/
	var thisHtml = this.innerHTML;
	var rect = this.getBoundingClientRect();
	var parent = this.parentNode;
	var textareaTd = newTd.cloneNode(false);
	var textarea = newTextarea.cloneNode(false);
	textareaTd.appendChild(textarea);
	parent.insertBefore(textareaTd, this);
	parent.removeChild(this);
	textarea.value = thisHtml;
	//cancelButton
	textarea.style.width = (rect.width - 4) + 'px';
	textarea.style.height = (rect.height - 4) + 'px';
	textareaTd.style.width = (rect.width - 4) + 'px';
	textareaTd.style.height = (rect.height - 4) + 'px';
	
	
	cancelButton.onclick = function(){
		this.parentNode.innerHTML = thisHtml;
		alreadyInRedact = false;
	}
	
	applyButton.onclick = function(){
		this.parentNode.innerHTML = textarea.value;
		alreadyInRedact = false;
	}
	
	//this.appendChild(textarea);
	//this.appendChild(cancelButton);
	//this.appendChild(applyButton);
}

document.body.appendChild(table);

for (var i = 0; i < 3; i++){
	var td = newTd.cloneNode(false);
	td.className = "redactable";
	td.id = "div" + i;
	td.innerHTML = htmls[i];
	td.setAttribute("tabindex", i + 1);
	td.onfocus = redact;
	table.appendChild(td);
}

