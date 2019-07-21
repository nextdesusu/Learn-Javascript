"use strict";

class Rectangle {
	constructor (ctx, x, y, w, h, color){
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = color;
	}
	draw(){
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.w, this.h);
	}
	move(x, y){
		this.x = x;
		this.y = y;
		this.draw();
	}
}



function main(){
	var screen = document.getElementById('screen');
	const HEIGHT = Number(screen.height);
	const WIDTH = Number(screen.width);
	var ctx;
	if (screen.getContext) {
		ctx = screen.getContext('2d');
	} else {
		alert('Что то пошло не так...')
	}
	var x = 100;
	var y = 0;
	var w = 50;
	var h = 50;
	var xmod = 1;
	var ymod = 1;
	var rect = new Rectangle(ctx, x, y, w, h, 'rgb(200, 0, 0)');
	function mainCycle(){
		ctx.clearRect(0, 0, HEIGHT, WIDTH);
		x += xmod;
		y += ymod;
		rect.draw();
		rect.move(x, y);
		if (x + w > WIDTH || x < 0){
			xmod *= -1;
		}
		if (y + h > HEIGHT ||y < 0){
			ymod *= -1;
		}
		window.requestAnimationFrame(mainCycle);
	}
	window.requestAnimationFrame(mainCycle);
}
main();