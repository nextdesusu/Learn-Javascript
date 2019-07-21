var canvas = document.getElementById("pCanvas");
var ctx = canvas.getContext("2d");
var pressed = false;
var mousePos;
var color;
var pencilType;
var pencilS;


document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("mousedown", mouseClickHandler, false);
document.addEventListener("mouseup", mouseClickHandler, false);

function mouseClickHandler(ev) {
    if (ev.type == "mousedown"){
		pressed = true;
	}
	if (ev.type == "mouseup"){
		pressed = false;
	}
}

function mouseMoveHandler(ev) {
    mousePos = [ev.clientX, ev.clientY]
	color = document.getElementById("penColor").value;
	pencilS = document.getElementById("penSize").value;
}

function drawPos(){
	ctx.font = "16px Arial";
	ctx.fillStyle = "#00995DD";
	ctx.fillText("Pos: " + mousePos, 8, 20);
}

function pencilRect() {
    ctx.beginPath();
    ctx.rect(mousePos[0] - canvas.offsetLeft - pencilS / 2,
	mousePos[1] - canvas.offsetTop - pencilS / 2, pencilS, pencilS);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function pencilCircle() {
    ctx.beginPath();
    ctx.arc(mousePos[0] - canvas.offsetLeft - pencilS / 2,
	mousePos[1] - canvas.offsetTop - pencilS / 2, pencilS, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function checkPenType(){
	var radioList = document.getElementsByName("pencil");
	if (radioList){
		if (radioList[0].checked){
			pencilType = "rect";
		}
		else if (radioList[1].checked){
			pencilType = "circle";
		}
	}
}

function draw(){
	checkPenType()
	if (pressed && pencilType === "rect"){
		pencilRect();
	}
	else if (pressed && pencilType === "circle"){
		pencilCircle();
	}
}


setInterval(draw, 10);