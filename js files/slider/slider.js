var slideLine = document.createElement('div');
var slider = document.createElement('div')

slideLine.id = 'slideLine';
slider.id = 'slider';

function moveSlider(e){
	var target = e.target;
	console.log(target.getAttribute('data-movable'));

	function getCoords(elem) {
		var box = elem.getBoundingClientRect();
		return {
			left: box.left + pageXOffset,
			width: box.width,
		};
	}
	
	var coordsSlider = getCoords(slider);
	var coordsSlideLine = getCoords(slideLine);
	var shiftX = e.pageX - coordsSlider.left;
	var blockLeft = coordsSlideLine.left;
	var blockRight = blockLeft + coordsSlideLine.width - coordsSlider.width;

	slider.style.position = 'absolute';
	slideLine.appendChild(slider);
	moveAt(e);

	slider.style.zIndex = 1000; // над другими элементами

	function moveAt(e) {
		console.log(e.type);
		var moveTo = e.pageX - shiftX;
		if ((moveTo > blockLeft) && (moveTo < blockRight)){
			slider.style.left = moveTo + 'px';
		}
	}
	
	slideLine.onmousemove = function(e) {
		moveAt(e);
	}

	document.onmouseup = function() {
		slideLine.onmousemove = null;
	};
	
}

document.body.appendChild(slideLine);

slider.ondragstart = function() {
		return false;
};
slideLine.addEventListener('mousedown', moveSlider);