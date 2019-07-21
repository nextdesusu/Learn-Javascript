"use strict";

var block = document.createElement('div');
block.style.backgroundColor = 'white';
block.style.width = '50px';
block.style.height = '50px';
block.style.border = '1px solid red';
document.body.appendChild(block);
var scale = 1;

function scaleElem(e){
	var delta = e.deltaY;
	scale += delta / 100 / 10;
	if (scale < 0){
		scale = 0;
	}
	console.log(scale);
	block.style.transform = block.style.WebkitTransform = block.style.MsTransform = 'scale(' + scale + ')';
}

document.addEventListener('wheel', scaleElem)