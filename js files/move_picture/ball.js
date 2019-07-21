var field = document.getElementById('field');
var ball = document.getElementById('ball');
var topOff = getCoords(field).top;
var leftOff = getCoords(field).left;
var border = parseInt(getComputedStyle(field).border);
var fieldWidth = getCoords(field).width;
var fieldHeight = getCoords(field).height;

function getCoords(elem) {
	var box = elem.getBoundingClientRect();
		
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
		height: box.height,
		width: box.width,
	};
}

function moveBall(e){
	var ballSizeY = getCoords(ball).height;
	var ballSizeX = getCoords(ball).width;
	var ballCenterX = (ballSizeX / 2);
	var ballCenterY = (ballSizeY / 2);
	var posLeft = e.clientX - ballCenterX - leftOff - border;
	var posTop = e.clientY - ballCenterY - topOff - border + window.pageYOffset;
	console.log(window.pageYOffset)
	for (var posX = 0; posX < posLeft; ++posX){
		if ((posX + ballSizeX >= fieldWidth - (border * 2))){
			break;
		}
	}
	for (var posY = 0; posY < posTop; ++posY){
		if ((posY + ballSizeY >= fieldHeight - (border * 2))){
			break;
		}
	}
	ball.style.left = posX + 'px';
	ball.style.top = posY + 'px';
}

field.addEventListener('click', moveBall)