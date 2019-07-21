"use strict";

function createButton(id, text, link){
	var cssToAdd = ["-moz-border-radius: 8px;", "-webkit-border-radius: 8px;", "borderRadius: 8px;",
    "border: 2px groove green;", "display: block;", "height: 30px;", "line-height: 30px;", "width: 100px;",
    "text-decoration: none;", "text-align: center;", "color: red;", "font-weight: bold;"]
	var a = document.createElement("a");
	a.className = "button";
	a.innerText = text;
	a.href = link;
	for (var i = 0; i < cssToAdd.length; ++i){
		a.style.cssText += cssToAdd[i]
	}
	document.body.appendChild(a);
}

createButton("my_button", "Нажми меня", "/");