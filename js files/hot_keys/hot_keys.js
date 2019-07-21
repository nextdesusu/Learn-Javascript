"use strict";

var div = document.getElementById('myDiv');
var newTextArea = document.createElement('textarea');
newTextArea.id = 'myTextarea';

var parent = div.parentElement;

newTextArea.onkeydown = function(e){

	if (e.ctrlKey) {
		var c = e.which || e.keyCode;
		if (c == 83){
			div.innerText = newTextArea.value;
			div.hidden = false
			parent.removeChild(newTextArea);
		}
		e.preventDefault();     
        e.stopPropagation();
	}
	if (e.keyCode == 27){
		div.hidden = false;
		parent.removeChild(newTextArea);
	}
	
}

div.onfocus = function(){
	
	div.onkeydown = function(e){
		if (e.ctrlKey) {
			var c = e.which || e.keyCode;
			if (c == 69){
				div.hidden = true;
				parent.appendChild(newTextArea)
			}
			e.preventDefault();     
            e.stopPropagation();
		}
	}

}