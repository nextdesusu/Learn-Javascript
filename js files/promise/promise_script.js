"use strict";

function delay(ms){
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			// переведёт промис в состояние fulfilled с результатом "result"
			resolve("result");
		}, ms);
	});
	
	return promise
}

delay(1000)
	.then(() => alert("Hello!"))

/*
function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
}
*/