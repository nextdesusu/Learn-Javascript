"use strict";

function showNotification_OLD(options){
	var div = document.createElement("div");
	var keys = Object.keys(options);
	div.className = "notification";
	for (var key = 0; key < keys.length; ++key){
		if (div[keys[key]] !== undefined){
			div[keys[key]] += " " + String(options[keys[key]]);
		}
		else {
			if (keys[key] == "html"){
				div.innerHTML = String(options[keys[key]]);
			}
			if (Number(options[keys[key]])){
				div.style.cssText += " " + keys[key] + ":" + " " + String(options[keys[key]]) + "px";
			}
			else {
				div.style.cssText += " " + keys[key] + ":" + " " + String(options[keys[key]]);
			}
		}
	}
	document.body.appendChild(div);
	setTimeout(function(){
		div.innerHTML = "";
	}, 1500);
}

 function showNotification(options) {
	var div = document.createElement("div");
	div.className = "notification";
	div.innerHTML = options["html"];
	div.style.marginTop = options["top"] + "px";
	div.style.marginRight = options["right"] + "px";
	div.className += " " + options["className"];
	document.body.appendChild(div);
	
    setTimeout(function(){
		div.innerHTML = "";
	}, 1500);

}

showNotification({
	top: 10,
	right: 10,
	html: "Привет",
	className: "welcome"
})