"use strict";

const list = [1, 2, 'kekekek', 4, 5];

const myFunc = (...arr) => {
	const newmap = arr.map(elem => {
		return elem + '1'
	})
	console.log(newmap)
}

myFunc(list);