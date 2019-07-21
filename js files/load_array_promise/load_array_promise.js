"use strict";

function consistentlyExecute(arr){
	if (!arr){
		return;
	}
	let elem = arr.shift();
	let promise = new Promise(function(resolve, reject){
		elem.onload = function(){
			resolve(elem)
		}
	});
	
}