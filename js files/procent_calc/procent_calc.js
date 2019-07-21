"use strict";

var input = document.getElementById('sumInput');
var months = document.getElementById('months');
var before = document.getElementById('before');
var after = document.getElementById('after');
var capitalization = document.getElementById('capitalization');
var [beforeP, beforeDiv] = before.children;
var [afterP, afterDiv] = after.children;

function parseInt(str){
	var res = '';
	for (var i = 0; i < str.length; i++){
		var Char = str[i]; 
		if (!isNaN(Number(Char))){
			res += Char;
		}
		else {
			break;
		}
	}
	return Number(res);
}

function getHeight(elem){
	return parseInt(getComputedStyle(elem).height);
}

function getMonths(){
	return Number(months[months.options.selectedIndex].value);
}

function getPayment(payment, months, capitalization){
	var monthlyIncrease = 0.01;
	if (capitalization){
		for (var i = 0; i < months; i++) {
			payment = payment * (1 + monthlyIncrease);
        }
	}
	else {
		payment = payment * (1 + monthlyIncrease * months);
	}
	return Math.round(payment);
}

input.onkeypress = function(e){
	if (isNaN(Number(e.key))){
		return false;
	};
}

input.oninput = months.oninput = capitalization.onchange = function(){
	var value = Number(input.value);
	var payment = getPayment(value, getMonths(), capitalization.checked);
	var redHeight = getHeight(beforeDiv);
	beforeP.innerText = value;
	afterP.innerText = payment;
	beforeDiv.style.height = Math.floor((value / payment) * 100) + 'px';
}