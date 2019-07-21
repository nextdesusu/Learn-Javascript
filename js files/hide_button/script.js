"use strict";
function create_block(cls, id, sizeX, sizeY, text){

	function getCoords(elem) {
		var box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
			height: box.height,
			width: box.width,
		};

	}
	
	var block = document.createElement('div');
	var button = document.createElement('button');
	var p = document.createElement('p');
	var br = document.createElement('br');
	block.className = 'block '
	button.className = cls + id;
	button.id = 'button' + id;
	br.className = 'br';
	p.className = 'p';
	p.innerText = text;
	document.body.appendChild(block);
	document.body.appendChild(button);
	document.body.appendChild(br);
	var blockCoords = getCoords(block);
	var buttonCoords = getCoords(button);
	block.style.width = sizeX + 'px';
	block.style.height = sizeY + 'px';
	button.innerText = '[x]';
	button.style.cssText = 'position: absolute;';
	button.style.top = (blockCoords.top) + 'px';
	button.style.left = (blockCoords.left + sizeX - buttonCoords.width - buttonCoords.height) + 'px';
	block.appendChild(p)
	assignButton(id);
}

function assignButton(id){
	var button = document.getElementById(('button' + id));
	function hide(){
		console.log('pressed ' + id)
		var block = document.getElementsByClassName('block')[id];
		var p = document.getElementsByClassName('p')[id];
		var br = document.getElementsByClassName('br')[id];
		block.style.display = "none";
		br.style.display = "none";
		p.style.display = "none";
		button.style.display = "none";
	}
	button.addEventListener('click', hide)
}

function general(text){
	for (var num = 0; num < 10; ++num){
		create_block('myId', num, 300, 100, text)
	}
}

general("Лошадь Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади.")
