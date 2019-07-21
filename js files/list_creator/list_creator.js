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
				var new_li = li.cloneNode(false);
				new_li.innerText = prop;
				var parent = elem;
				parent.appendChild(new_li);
				var new_ul = ul.cloneNode(false);
				new_li.appendChild(new_ul);
				getProp(o[prop], new_ul)
			}
			else {
				var new_li = li.cloneNode(false);
				new_li.innerText = prop
				var parent = elem;
				parent.appendChild(new_li);
			}
		}
	}
}

create_list(data)