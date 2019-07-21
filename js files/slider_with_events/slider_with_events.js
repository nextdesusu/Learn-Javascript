function Slider(options){
	var slideLine;
	var slider;
	var pixelsPerValue = 0;
	var currentPos = 0;
	
	function sendEventSlide(changeVal){
		var slideEvent = new CustomEvent('slide', {
			bubbles: true,
			detail: changeVal,
			}
		); 
		slider.dispatchEvent(slideEvent);
	}
	
	function sendEventChange(val){;
		var changeEvent = new CustomEvent('change', {
			bubbles: true,
			detail: val,
			}
		); 
		slider.dispatchEvent(changeEvent);
	}
	
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
		pixelsPerValue = (slideLine.clientWidth - slider.clientWidth) / options.max;
	}
	
	function move(val){
		slider.style.left = val + 'px';
		sendEventSlide(Math.round(val / pixelsPerValue));
		currentPos = val;
	}
	
	function setValue(to){
		move(to * pixelsPerValue);
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
					move(moveTo);
				}
			}
		}

		slideLine.onmouseup = function() {
			sendEventChange(Math.round(currentPos / pixelsPerValue));
			slideLine.onmousemove = null;
		};
	}
	
	setUp();
	hangHandlers();
	console.log(pixelsPerValue);
	this.setVal = setValue;
	this.getElem = function(){
		return slider;
	}
}

var slider = new Slider({max: 100,});
var sliderElem = slider.getElem();

var slideTable = document.createElement('p');
var changeTable = document.createElement('p');
var button = document.createElement('button');
button.innerText = 'set 50';
slideTable.innerText = 'Slide: ';
changeTable.innerText = 'Change: ';
document.body.appendChild(slideTable);
document.body.appendChild(changeTable);
document.body.appendChild(button);
button.onclick = function(){
	slider.setVal(50);
}

sliderElem.addEventListener('slide', function(event) {
	slideTable.innerHTML = 'Slide: ' + event.detail;
});

sliderElem.addEventListener('change', function(event) {
	changeTable.innerHTML = 'Change: ' + event.detail;
});