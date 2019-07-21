function moveObject(e) {
	var target = e.target;
	var condition = target.getAttribute('data-movable');
	
	if (condition === 'true'){
		var coords = getCoords(target);
		var shiftX = e.pageX - coords.left;
		var shiftY = e.pageY - coords.top;

		target.style.position = 'absolute';
		document.body.appendChild(target);
		moveAt(e);

		target.style.zIndex = 1000; // над другими элементами

		function moveAt(e) {
			target.style.left = e.pageX - shiftX + 'px';
			target.style.top = e.pageY - shiftY + 'px';
		}

		document.onmousemove = function(e) {
			moveAt(e);
		};

		target.onmouseup = function() {
			document.onmousemove = null;
			target.onmouseup = null;
		};
		
		target.ondragstart = function() {
			return false;	
		};
	}
}


function getCoords(elem) {
	var box = elem.getBoundingClientRect();
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}

document.body.addEventListener('mousedown', moveObject);