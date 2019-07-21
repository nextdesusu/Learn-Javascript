"use strict";

function checkForBorders(e){
	var elem = e.target;
	if (elem.tagName === 'TEXTAREA'){
		e.preventDefault();
		var height = elem.scrollHeight - elem.clientHeight;
		var scrollPos = elem.scrollTop;
		if (e.deltaY > 0){
			var delta = 8;
		}
		else {
			var delta = -8;
		}
		if (scrollPos >= height){
			if (delta > 0){
				delta = 0;
			}
		}
		elem.scrollBy(0, delta);
	}
}

document.body.addEventListener('wheel', checkForBorders)