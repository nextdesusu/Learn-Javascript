ButtonQuantity = 0

function getCoords(elem) {
		var box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
			height: box.height,
			width: box.width,
		};

	}

function create_block(id, sizeY, title, text){
	var block = document.createElement('div');
	var button = document.createElement('button');
	var p = document.createElement('p');
	var header = document.createElement('h1');
	var br = document.createElement('br');
	block.className = 'block'
	button.className = 'button';
	button.id = 'button' + id;
	br.className = 'br';
	p.className = 'p';
	header.innerText = title + id;
	p.innerText = text;
	block.id = 'block' + id
	document.body.appendChild(block);
	block.appendChild(header);
	block.appendChild(p);
	block.appendChild(button);
	button.innerText = '[x]';
	button.style.cssText = 'position: absolute;';
	document.body.appendChild(br);
}

function moveButtons(){
	var blocks = document.getElementsByClassName('block');
	var buttons = document.getElementsByClassName('button');
	
	for (var index = 0; index < buttons.length; ++index){
		var blockCoords = getCoords(blocks[index]);
		var buttonCoords = getCoords(buttons[index]);
		buttons[index].style.top = (blockCoords.top) + 'px';
		buttons[index].style.left = (blockCoords.left + blockCoords.width - buttonCoords.width) + 'px';
	}
}

function assignButton(id){
	var button = document.getElementById(('button' + id));
	var block = document.getElementsByClassName('block')[id];
	var p = document.getElementsByClassName('p')[id];
	var br = document.getElementsByClassName('br')[id];
	function hide(){
		console.log('pressed ' + id)
		block.style.display = "none";
		br.style.display = "none";
		p.style.display = "none";
		button.style.display = "none";
		moveButtons();
	}
	button.addEventListener('click', hide)
}

function createNote(header, text){
	create_block(ButtonQuantity, 100, header, text)
	assignButton(ButtonQuantity);
	++ButtonQuantity;
	moveButtons();
}

function general(){
	for (var num = 0; num < 10; ++num){
		create_block(num, 100, "Лошадь", "Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади.")
		assignButton(num);
	}
	moveButtons();
}

general()


