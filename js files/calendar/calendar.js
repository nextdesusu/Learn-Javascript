"use strict";

function createCalendar(id, year, month){
	if (!month){
		month = 1;
	}
	if (month > 12){
		throw "Enter correct month"
	}
	//Create div to use it as a parent element for calendar
	var div = document.createElement("div");
	div.className = "Calendar";
	div.id = id;
	document.body.appendChild(div);
	var table = document.createElement("table");
	table.className = "CalendarTable";
	div.appendChild(table);
	//Create elements to use them in function cloneNode instead of creating them
	var th = document.createElement("th");
	th.className = "CalendarTH";
	var td = document.createElement("td");
	td.className = "CalendarTD";
	var tr = document.createElement("tr");
	tr.className = "CalendarTR";
	var days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
	
	//Used in days_quantity
	function isInteger(num) {
		return (num ^ 0) === num;
	}
	
	//Used to count days in month
	function daysQuantity(m, y){
		if (m == 2){
			var y_4 = y / 4;
			var y_100 = y / 100;
			var y_400 = y / 400;
			if ((isInteger(y_4) && isInteger(y_100)) || isInteger(y_400)){
				return 29;
			} 
			return 28;
		}
		if (m == 11 || m == 9 || m == 6 || m == 3){
			return 30;
		}
		return 31;
	}
	
	//This function creating all html elements like th, td, 
	//tr and fill it's innerText
	function createCells(){
		var new_th, new_td, new_tr;
		var col = 6, row = 7;
		var start = (col * row) - daysQuantity(month, year);
		var counter = 0, day = 1, first = true;
		for (var i = 0; i < col; ++i){
			new_tr = tr.cloneNode(false);
			table.appendChild(new_tr);
			for (var j = 0; j < row; ++j){
				if (first){
					new_th = th.cloneNode(false);
					new_th.innerText = days[j];
					new_tr.appendChild(new_th);
					if (j >= row - 1){
						first = false;
					}
				}
				else {
					new_td = td.cloneNode(false);
					new_tr.appendChild(new_td);
					if (counter >= start){
						new_td.innerText = day;
						day++;
					}
					else {
						new_td.innerText = "*";
					}
				}
				++counter;
				}
			}
		}
	createCells();
}

createCalendar("cal", 2012, 9);