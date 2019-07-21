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
	var ul = document.createElement("ul");
	var parent_ul_1 = document.getElementsByTagName("ul")[0], parent_ul_2, parent_ul_3;
	var new_li = document.createElement("li");
	var my_obj = Object.keys(obj);
	var li, ul_counter = 0, li_counter = -1;
	document.body.appendChild(ul)
	for (var i = 0; i < my_obj.length; i++){
		parent_ul_1 = document.getElementsByTagName("ul")[0];
		li = new_li.cloneNode(false);
		li.innerText = my_obj[i];
		parent_ul_1.appendChild(li);
		li_counter++;
		if (obj[my_obj[i]]){
			parent_ul_2 = document.getElementsByTagName("li")[li_counter];
			var new_ul = ul.cloneNode(false);
			parent_ul_2.appendChild(new_ul);
			li_counter++
			var my_obj1 = Object.keys(obj[my_obj[i]])
			ul_counter++;
			for (var j = 0; j < my_obj1.length; j++){
				parent_ul_2 = document.getElementsByTagName("ul")[i];
				var li_1 = new_li.cloneNode(false);
				li_1.innerText = my_obj1[j];
				parent_ul_2.appendChild(li_1);
				if (obj[my_obj[i]][my_obj1[j]]){
					var my_obj2 = Object.keys(obj[my_obj[i]][my_obj1[j]]);
					for (var k = 0; k < my_obj2.length; k++){
					}
				}
			}
		}
	}
}


function parse(obj){
	var space = "";
	getProp(obj);
	
	function empty(obj){
		var keys = Object.keys(obj)
		for (var key = 0; key < keys.length; ++key){
			if (keys[key]){
				return false
			}
		}
		return true
	}
	
	function getProp(o){
		for (var prop in o){
			console.log(space + prop)
		}
		for (var prop in o){
			if (typeof o[prop] === 'object' && !empty(o[prop])){
				space += "-";
				getProp(o[prop])
			}
			else {
				console.log("end")
			}
		}
	}
}

create_list(data)