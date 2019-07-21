function Slider(){
	var slideLine;
	var slider;
	
	function getCoords(elem) {
		var box = elem.getBoundingClientRect();
		return {
			left: box.left + pageXOffset,
			width: box.width,
		};
	}
	
	function setUp(){
		slideLine = document.createElement('div');
		slider = document.createElement('div')
		slideLine.id = 'slideLine';
		slider.id = 'slider';
		slider.style.zIndex = 1000;
		document.body.appendChild(slideLine);
		slideLine.appendChild(slider);
	}
	
	function hangHandlers(){
		slider.ondragstart = function() {
			return false;
		};
		
		slider.onmousedown = function(e){
			slider.style.position = 'absolute';
			var coordsSlider = getCoords(slider);
			var coordsSlideLine = getCoords(slideLine);
			var shiftX = e.pageX - coordsSlider.left;
			var blockLeft = coordsSlideLine.left;
			var blockRight = blockLeft + coordsSlideLine.width - coordsSlider.width;
			slideLine.onmousemove = function(e) {
				var moveTo = e.pageX - shiftX;
				if ((moveTo > blockLeft) && (moveTo < blockRight)){
					slider.style.left = moveTo + 'px';
				}
			}
		}

		slideLine.onmouseup = function() {
			slideLine.onmousemove = null;
		};
	}
	
	this.init = function(){
		setUp();
		hangHandlers();
	}
}

var slider = new Slider();
slider.init();