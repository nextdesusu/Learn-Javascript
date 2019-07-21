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
	var div = document.createElement('div');
	var li = document.createElement('li');
	var ul = document.createElement('ul');
	var span = document.createElement('span');
	span.className = 'header';
	var innerulId = 0;
	document.body.appendChild(div);
	div.appendChild(ul);
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
				var new_li = li.cloneNode(false);
				var new_span = span.cloneNode(false);
				new_span.hasElem = true;
				new_span.innerElem = innerulId;
				new_span.innerText = prop;
				var parent = elem;
				parent.appendChild(new_li);
				new_li.appendChild(new_span);
				var new_ul = ul.cloneNode(false);
				new_ul.hidden = false;
				new_ul.id = 'ul' + innerulId;
				new_li.appendChild(new_ul);
				innerulId++;
				getProp(o[prop], new_ul)
			}
			else {
				var new_li = li.cloneNode(false);
				var new_span = span.cloneNode(false);
				new_span.innerText = prop;
				var parent = elem;
				parent.appendChild(new_li);
				new_li.appendChild(new_span);
			}
		}
	}
	
	
	function open(e){
		var target = e.target;
		if (target.hasElem){
			var ul = document.getElementById('ul' + target.innerElem);
			if (!(ul.hidden)){
				ul.hidden = true;
			}
			else {
				ul.hidden = false;
			}
		}
	}
	
	div.addEventListener('click', open)
}

create_list(data)