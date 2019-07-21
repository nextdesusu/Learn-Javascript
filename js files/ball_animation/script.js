"use strict";

const ball = document.getElementById('ball');
const space = document.getElementById('space');

function parseInt(str){
	let res = '';
	for (let i = 0; i < str.length; ++i){
		if (isNaN(Number(str[i]))){
			break
		}
		res += str[i]
	}
	return Number(res);
}

function animate(options) {
	
	const start = performance.now();

	requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
	    let timeFraction = (time - start) / options.duration;
	    if (timeFraction > 1) timeFraction = 1;

	    // текущее состояние анимации
	    let progress = options.timing(timeFraction)

	    options.draw(progress);

	    if (timeFraction < 1) {
	    	requestAnimationFrame(animate);
	    }

	});
}

function bounce(timeFraction) {
  for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

ball.onclick = () =>{
	//console.log(getComputedStyle(space).height);
	const animHeight = parseInt(getComputedStyle(space).height) - parseInt(getComputedStyle(ball).height);
	animate({
        duration: 3000,
        timing: makeEaseOut(bounce),
        draw: (progress) => {
          	ball.style.top = progress * animHeight + 'px';
        }
      });
}