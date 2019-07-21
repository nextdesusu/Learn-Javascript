"use strict";

function Clock(options){
	var timeInterval;
	var isTimeIntervalSetted = false;
	var hrElem;
	var mnElem;
	var scElem;
	
	function setUp(){
		var div = document.createElement("div");
		var nobr1 = document.createElement("nobr");
		var nobr2 = document.createElement("nobr");
		var nobr3 = document.createElement("nobr");
		var nobr4 = document.createElement("nobr");
		var nobr5 = document.createElement("nobr");
		document.body.appendChild(div);
		div.appendChild(nobr1);
		nobr1.style.color = "red";
		div.appendChild(nobr2);
		nobr2.innerText = ":";
		div.appendChild(nobr3);
		nobr3.style.color = "green";
		div.appendChild(nobr4);
		nobr4.innerText = ":";
		div.appendChild(nobr5);
		nobr5.style.color = "blue";
		hrElem = nobr1;
		mnElem = nobr3;
		scElem = nobr5;
		updateCurrentTime();
	}
	
	function checkLength(elem){
		elem = String(elem);
		if (elem.length < 2){
			elem = "0" + elem;
		}
		return elem;
	}
	
	function updateCurrentTime(){
		var time = new Date();
		var hr = time.getHours();
		var mn = time.getMinutes();
		var sc = time.getSeconds();
		hr = checkLength(hr);
		mn = checkLength(mn);
		sc = checkLength(sc);
		hrElem.innerText = hr;
		mnElem.innerText = mn;
		scElem.innerText = sc;
	}
	
	function start(){
		if (isTimeIntervalSetted){
			return;
		}
		timeInterval = setInterval(function(){
			updateCurrentTime();
		}, 1000,);
		isTimeIntervalSetted = true;
	}
	
	function stop(){
		if (timeInterval){
			clearInterval(timeInterval);
			isTimeIntervalSetted = false;
		}
	}
	
	this.setUp = setUp;
	this.start = start;
	this.stop = stop;
}

var clock = new Clock({});
clock.setUp();

var startButton = document.createElement('button');
var stopButton = document.createElement('button');
var alertButton = document.createElement('button');
	
startButton.innerText = 'start';
startButton.onclick = function(){
	clock.start();
}
stopButton.innerText = 'stop';
stopButton.onclick = function(){
	clock.stop();
}
alertButton.innerText = 'alert';
alertButton.onclick = function(){
	alert('Время должно прекратить идти...');
}

document.body.appendChild(startButton);
document.body.appendChild(stopButton);
document.body.appendChild(alertButton);