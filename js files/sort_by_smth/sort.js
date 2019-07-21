"use strict";

var menu = document.createElement('table');
menu.id = 'menu';
document.body.appendChild(menu);
var tr_ = document.createElement('tr');
var td_ = document.createElement('td');
var th_ = document.createElement('th');

var peoples_by_name = {
	"Вася": 5,
	"Женя": 12,
	"Илья": 1,
	"Маша": 9,
	"Петя": 2,
}

function getReversedObject(obj){
	var keys = [], values = [];
	for (var i = 0; i < Object.keys(obj).length; ++i){
		keys.push(Object.keys(obj)[i]);
	}
	for (var j = 0; j < keys.length; ++j){
		values.push(obj[keys[j]]);
	}
	var res = {};
	for (var k = 0; k < values.length; ++k){
		res[values[k]] = keys[k];
	}
	return res
}

function createMenu(){	
	var names = Object.keys(peoples_by_name);
	var ages = [];
	for (var key in names){
		ages.push(peoples_by_name[names[key]])
	}
	var tr = tr_.cloneNode(false);
	var thNames = th_.cloneNode(false);
	thNames.sorting = 'names';
	var thAges = th_.cloneNode(false);
	thAges.sorting = 'ages';
	menu.appendChild(tr);
	thNames.innerText = 'Имя';
	thAges.innerText = 'Возраст';
	tr.appendChild(thAges);
	tr.appendChild(thNames);
	for (var i = 0; i < names.length; ++i){
		var tr = tr_.cloneNode(false);
		var tdAge = td_.cloneNode(false);
		var tdName = td_.cloneNode(false);
		tdAge.className = 'age';
		tdName.className = 'name';
		tdAge.innerText = ages[i];
		tdName.innerText = names[i];
		menu.appendChild(tr);
		tr.appendChild(tdAge);
		tr.appendChild(tdName);
	}
}

function sortMenu(by){
	if (by == 'names'){
		var dict = peoples_by_name;
		var keys = Object.keys(dict);
		keys = keys.sort();
		var tdNameList = document.getElementsByClassName('name');
		var tdAgeList = document.getElementsByClassName('age');
		for (var i = 0; i < keys.length; ++i){
			tdAgeList[i].innerText = dict[keys[i]];
			tdNameList[i].innerText = keys[i];
		}
	}
	if (by == 'ages'){
		var dict = getReversedObject(peoples_by_name);
		var keys = Object.keys(dict);
		var sortFunc = function(x, y){return x - y};
		keys = keys.sort(sortFunc);
		var tdNameList = document.getElementsByClassName('name');
		var tdAgeList = document.getElementsByClassName('age');
		for (var i = 0; i < keys.length; ++i){
			tdAgeList[i].innerText = keys[i];
			tdNameList[i].innerText = dict[keys[i]];
		}
	}
}

function show(e){
	var target = e.target;
	if (target.sorting){
		sortMenu(target.sorting);
	}
}
menu.addEventListener('click', show)

createMenu();