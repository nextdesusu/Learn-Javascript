"use strict";

var gallery = document.getElementById('gallery');
var ul = document.createElement('ul');
var li = document.createElement('li');
var img = document.createElement('img');
img.className = 'lower';
var canv = gallery.cloneNode(false);
var imgSrcList = [];
canv.id = 'canv';
gallery.appendChild(canv);
gallery.appendChild(ul);
for (var index = 1; index <= 5; ++index){
	var new_li = li.cloneNode(false);
	var new_img = img.cloneNode(false);
	ul.appendChild(new_li);
	new_img.src = 'img/' + 'img' + index + '.jpg';
	imgSrcList.push('img/' + 'img' + index + '.jpg');
	new_img.index = index - 1;
	new_img.style.width = '100px';
	new_img.style.height = '100px';
	new_li.appendChild(new_img);
}

var centerImage = img.cloneNode(false)
centerImage.className = 'upper';
centerImage.src = imgSrcList[0]

canv.appendChild(centerImage);

function setInCenter(index){
	centerImage.src = imgSrcList[index];
}

function imgClicker(e){
	var target = e.target
	if (target.tagName === 'IMG' && target.className == 'lower'){
		setInCenter(target.index);
	}
}

gallery.addEventListener('click', imgClicker)