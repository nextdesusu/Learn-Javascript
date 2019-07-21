"use strict";

var canvas = document.getElementById('canvas');

var ctx;
if (canvas.getContext) {
	ctx = canvas.getContext('2d');
} else {
	alert('Что то пошло не так...')
}

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function HW(){
	return randomInteger(10, 100);
}

function getRandomPixelColor(){
	return randomInteger(0, 255);
}

var times = randomInteger(5, 100);

function drawRandomRect(){
	ctx.fillStyle = 'rgb('+ getRandomPixelColor()  +', ' + getRandomPixelColor() + ', ' +getRandomPixelColor() + ')';
	ctx.fillRect(10, 10, HW(), HW());
	window.requestAnimationFrame(drawRandomRect);
}

window.requestAnimationFrame(drawRandomRect);