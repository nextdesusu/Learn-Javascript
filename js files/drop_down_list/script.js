"use strict";

var menu = document.getElementsByClassName("menu")[0];


function showList(){
	if (menu.className == 'menu open'){
		menu.className = 'menu'
	}
	else {
		menu.className = 'menu open';
	}

}
menu.addEventListener('click', showList)