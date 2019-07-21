function getCoords(elem) {
	var box = elem.getBoundingClientRect();
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
		height: box.height,
		width: box.width,
	};
}

var general = document.createElement('div');
general.id = 'menu';
document.body.appendChild(general);

function create_block(id, sizeY, title, text){
	var block = document.createElement('div');
	var button = document.createElement('button');
	var p = document.createElement('p');
	var header = document.createElement('h1');
	var br = document.createElement('br');
	block.className = 'block';
	button.className = 'button';
	button.button_id = String(id);
	br.className = 'br';
	p.className = 'p';
	header.innerText = title + id;
	p.innerText = text;
	block.id = 'block' + id
	general.appendChild(block);
	block.appendChild(header);
	block.appendChild(p);
	block.appendChild(button);
	button.innerText = '[x]';
	button.style.cssText = 'position: absolute;';
	general.appendChild(br);
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

function create(){
	for (var num = 0; num < 10; ++num){
		create_block(num, 100, "Лошадь", "Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади.")
	}
	moveButtons();
}

function Menu(elem){
	create();
	
	elem.onclick = function(e){
		var target = e.target;
		if (target.button_id){
			var id = Number(target.button_id);
			console.log(id);
			var button = document.getElementsByClassName('button')[id];
			var block = document.getElementsByClassName('block')[id];
			var p = document.getElementsByClassName('p')[id];
			var br = document.getElementsByClassName('br')[id];
			button.style.display = "none";
			block.style.display = "none";
			br.style.display = "none";
			p.style.display = "none";
			moveButtons();
		}
	}
}

new Menu(general)