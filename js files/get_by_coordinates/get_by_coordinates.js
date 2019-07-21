"use strict";

var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

function create_list(obj){
	var li = document.createElement('li');
	var ul = document.createElement('ul');
	var span = document.createElement('span')
	var counter = 0;
	document.body.appendChild(ul);
	
	getProp(obj, ul);
	
	function empty(obj){
		var keys = Object.keys(obj)
		for (var key = 0; key < keys.length; ++key){
			if (keys[key]){
				return false
			}
		}
		return true
	}
	
	function getProp(o, elem){
		for (var prop in o){
			if (typeof o[prop] === 'object' && !empty(o[prop])){
				++counter;
				var new_li = li.cloneNode(false);
				new_li.innerText = prop;
				new_li.setAttribute('data-inner-list', counter)
				var parent = elem;
				parent.appendChild(new_li);
				var new_ul = ul.cloneNode(false);
				new_ul.className = 'Inner_ul' + String(counter);
				new_li.appendChild(new_ul);
				getProp(o[prop], new_ul)
			}
			else {
				var new_li = li.cloneNode(false);
				new_li.className = counter;
				new_li.innerText = prop
				var parent = elem;
				parent.appendChild(new_li);
			}
		}
	}
}

function hide(e){
	
	function getSize(elem){
		var span = document.createElement('span');
		var child = elem.firstChild.cloneNode(true);
		elem.appendChild(span);
		span.appendChild(elem.firstChild);
		var x = span.getBoundingClientRect().x;
		var width = span.getBoundingClientRect().width;
		elem.removeChild(span);
		elem.insertBefore(child, elem.firstChild);
		return [x, x + width]
	}

	var target = e.target.getAttribute('data-inner-list');
	if (target !== null){
		var MX = e.clientX;
		var MY = e.clientY;
		var size = getSize(e.target);
		var x, width;
		[x, width] = size; 
		if (MX > x && MX < width){
			var nameOfSet = 'Inner_ul' + String(target);
			var ulSet = document.getElementsByClassName(nameOfSet);
			for (var i = 0; i < ulSet.length; ++i){
				ulSet[i].hidden = !ulSet[i].hidden;
			}
		}
	}
}

document.body.addEventListener('click', hide)

create_list(data)