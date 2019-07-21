"use strict";

function showTime(id){
	var div = document.createElement("div");
	div.id = id;
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
	
	function checkLength(elem){
		elem = String(elem);
		if (elem.length < 2){
			elem = "0" + elem;
		}
		return elem;
	}
	
	function start(){
		var time = new Date();
		var hr = time.getHours();
		var mn = time.getMinutes();
		var sc = time.getSeconds();
		hr = checkLength(hr);
		mn = checkLength(mn);
		sc = checkLength(sc);
		nobr1.innerText = hr;
		nobr3.innerText = mn;
		nobr5.innerText = sc;
	}
	
	setInterval(function(){
		start();
	}, 1000,);
}

showTime("Time")

// образец подсказки
var tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Подсказка";

// при "наведении на элемент" показать подсказку
new HoverIntent({
  elem: elem,
  over: function() {
    tooltip.style.left = this.getBoundingClientRect().left + 'px';
    tooltip.style.top = this.getBoundingClientRect().bottom + 5 + 'px';
    document.body.appendChild(tooltip);
  },
  out: function() {
    document.body.removeChild(tooltip);
  }
});