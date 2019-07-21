"use strict";

var pressed = {};

function runOnKeys(){
	var func = arguments[0];
	var keys = [];
	for (var i = 1; i < arguments.length; ++i){
		keys.push(arguments[i]);
	}
	return function(){
		console.log('icalled');
		console.log(arguments);
		console.log(keys);
		for (var i = 0; i < arguments.length; ++i){
			if (Number(arguments[i]) !== keys[i]){ return }
		}
		func();
	}
}

var func2 = runOnKeys(
  function() { alert("тЫ ХУЙ") },
  "A".charCodeAt(0),
  "W".charCodeAt(0),
  "D".charCodeAt(0)
);

function addKey(e){
	pressed[e.key.charCodeAt(0)] = true;
	runOnKeys(
	function() { alert("Привет!") },
		"Q".charCodeAt(0),
		"W".charCodeAt(0)
	)(Object.keys(pressed));
}

function removeKey(e){
	var keys = Object.keys(pressed);
	for (var i = 0; i < keys.length; ++i){
		delete pressed[keys[i]];
	}
}

document.addEventListener('keypress', addKey);
document.addEventListener('keydown', removeKey);