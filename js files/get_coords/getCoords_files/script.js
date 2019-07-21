"use strict";

var show = (some) => console.log(some);
var field = document.getElementById('field');
var triangles = document.getElementsByClassName('triangle-right');
show("triangles")
for (var i = 0; i < triangles.length; ++i){
	show(triangles[i].getBoundingClientRect()['right'] + " : " + triangles[i].getBoundingClientRect()['top']);
}
var bLeft = parseInt(getComputedStyle(field).borderLeft);
var bTop = parseInt(getComputedStyle(field).borderTop);
show('old way')
show(field.offsetLeft + " : " + field.offsetTop)
show((field.offsetLeft + field.offsetWidth) + " : " + (field.offsetHeight + field.offsetTop))
show((field.offsetLeft + bLeft) + " : " + (field.offsetTop + bTop))
show((field.offsetLeft + field.offsetWidth - bLeft) + " : " + (field.offsetHeight + field.offsetTop - bTop))
function parseInt(str){
	var res = '';
	for (var i = 0; i < str.length; ++i){
		if (!isNaN(Number(str[i]))){
			res += str[i];
		}
		else {
			break;
		}
	}
	return Number(res);
}

//different way
show('new way')
var coords = field.getBoundingClientRect();
show(coords.left + " : " + coords.top)
show(coords.right + " : " + coords.bottom)
show((coords.left + field.clientLeft) + " : " + (coords.top + field.clientTop))
show((coords.right - parseInt(getComputedStyle(field).borderRightWidth)) + " : " + (coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)))

//also
//var coords4 = [
//  coords.left + elem.clientLeft + elem.clientWidth,
//  coords.top + elem.clientTop + elem.clientHeight
//]