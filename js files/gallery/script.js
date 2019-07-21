"use strict";

function createGallery(){

	function getCoords(elem) {
		var box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
			height: box.height,
			width: box.width,
		};

	}
	
	var gallery = document.getElementById('gallery');
	var ul = document.createElement('ul');
	var li = document.createElement('li');
	var img = document.createElement('img');
	var START = - 45;
	var buttonLeft = document.createElement('button');
	var buttonRight = document.createElement('button');
	var BUTTON_SIZE = 20;
	buttonLeft.style.position = 'absolute';
	buttonRight.style.position = 'absolute';
	buttonLeft.innerText = '<'
	buttonRight.innerText = '>'
	ul.id = 'galleryScroller';
	gallery.appendChild(ul);
	var galleryCoords = getCoords(gallery);
	for (var index = 1; index <= 10; ++index){
		var new_li = li.cloneNode(false);
		var new_img = img.cloneNode(false);
		ul.appendChild(new_li);
		new_img.src = 'img/' + index + '.png';
		new_li.appendChild(new_img);
	}
	gallery.append(buttonLeft);
	gallery.append(buttonRight);
	buttonLeft.style.top = ((gallery.offsetHeight / 2) - galleryCoords.top) + 'px';
	buttonLeft.style.left = galleryCoords.left + 'px';
	buttonRight.style.top = ((gallery.offsetHeight / 2) - galleryCoords.top) + 'px';
	buttonRight.style.left = (galleryCoords.left + gallery.offsetWidth - BUTTON_SIZE) + 'px';
	
	var offset = 0;
	
	function transformUl(o){
		ul.style.transform = 'translate(' + o + 'px)';
	}
	
	function scrollRight(){
		if (offset > -900){
			offset -= 140;
			transformUl(offset)
		}
		console.log(offset)
	}
	function scrollLeft(){
		if (offset < START){
			offset += 140;
			transformUl(offset)
		}
		console.log(offset)
	}
	
	buttonRight.addEventListener('click', scrollRight)
	buttonLeft.addEventListener('click', scrollLeft)
}

createGallery()
