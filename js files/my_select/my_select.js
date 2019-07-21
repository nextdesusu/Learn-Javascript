"use strict";

function CustomSelect(options){
	var elem = options.elem;
	var isOpen = false;
	var header = elem.children[0];
	
	function onDocumentClick(event) {
		if (!elem.contains(event.target)){
			close();
		}
	}
	
	function setValue(title, value) {
		header.innerText = title;
		var widgetEvent = new CustomEvent('select', {
			bubbles: true,
			detail: {
				title: title,
				value: value
			}
		});
		elem.dispatchEvent(widgetEvent);
	}
	
	function open(){
		if (isOpen){
			return;
		}
		elem.classList.add('open');
		document.addEventListener('click', onDocumentClick);
		isOpen = true;
	}
	
	function close(){
		if (!isOpen){
			return;
		}
		elem.classList.remove('open');
		document.removeEventListener('click', onDocumentClick);
		isOpen = false;
	}
	
	function setHandlers(){
		
		elem.onclick = function(e){
			open();
			var target = e.target;
			var attribute = target.getAttribute('data-value');
			if (attribute){
				setValue(target.innerText, attribute);
				close();
			}
		}
		
	}

	setHandlers();
}

