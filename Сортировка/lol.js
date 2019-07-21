"use strict";

var list = [1244, 13, 4, 2, 12, 54, 1242, 54646, 12313, 3]

console.log(list)

function swap(arr, e1, e2){
	var toSave = arr[e1];
	arr[e1] = arr[e2];
	arr[e2] = toSave;
}


function BubbleSorting(arr){
	var done = false;
	while (!done){
		done = true;
		for (var i = 0; i < arr.length; i++){
			if (arr[i] > arr[i+1]){
				swap(arr, i, i+1)
				done = false;
			}
		}
	}
}

function InsertSorting(arr){
	for (var j = 2; j < arr.length; j++){
		var key = arr[j];
		var i = j - 1;
		while (i >= 0 && arr[i] > key){
			arr[i + 1] = arr[i];
			i--;
		}
		arr[i + 1] = key;
	}
}

function SelectionSorting(arr){
	var min_elem, iterator = 0, min_iter;
	for (; iterator < arr.length; iterator++){
		min_elem = Math.min.apply(null, arr.slice(iterator));
		min_iter = arr.indexOf(min_elem);
		if (min_elem < arr[iterator]){
			swap(arr, min_iter, iterator)
		}
	}
}

function mergeSort(arr){
	if (arr.length == 1){
		return arr;
	}
	var middle = arr.length / 2;
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);
	left = mergeSort(left);
	right = mergeSort(right);
	var result = merge(left, right);
	return result;
	
	function merge(left, right){
		var res = [];
		while (left.length > 0 && right.length > 0){
			if (left[0] <= right[0]){
				res.push(left[0]);
				left.shift();
			} else {
				res.push(right[0]);
				right.shift()
			}
		}
		if (left.length > 0){
			for (var i = 0; i < left.length; i++){
				res.push(left[i]);
			}
		}
		if (right.length > 0){
			for (var j = 0; j < right.length; j++){
				res.push(right[j]);
			}
		}
		return res;
	}
	
}

list = mergeSort(list)


console.log(list)

