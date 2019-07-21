"use strict";

var inputField = document.getElementById('numField');

inputField.onkeypress = function(e){
	if (isNaN(Number(e.key))){
		return false;
	}
}