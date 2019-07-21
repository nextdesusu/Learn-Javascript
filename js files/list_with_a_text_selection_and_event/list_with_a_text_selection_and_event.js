function textSelection(options){
	var listOfLi = options.list.getElementsByTagName('li');
	var previousTarget = 0;
	var selectEvent;
	
	function assignSelectEvent(){
		selectEvent = new CustomEvent("select", {
			bubbles: true,
			detail: getSelected,
		});
	}
	
	function setDataIds(){
		for (var i = 0; i < listOfLi.length; ++i){
			listOfLi[i].setAttribute('data-id', i);
		}
	};
	
	function checker(e){
		var target = e.target;
		if (target.getAttribute('data-id')){
			if (e.ctrlKey){
				target.className = 'Color-green';
				previousTarget = Number(target.getAttribute('data-id'));
			}
			else if (e.shiftKey){
				var currentTarget = Number(target.getAttribute('data-id'));
				if (previousTarget < currentTarget){
					for (var i = previousTarget; i <= currentTarget; ++i){
						listOfLi[i].className = 'Color-green';
					}
				}
				else {
					for (var i = previousTarget; i >= currentTarget; --i){
						listOfLi[i].className = 'Color-green';
					}
				}
				previousTarget = Number(target.getAttribute('data-id'));
			}
			else {
				for (var i = 0; i < listOfLi.length; ++i){
					listOfLi[i].className = '';
				}
				target.className = 'Color-green';
				previousTarget = Number(target.getAttribute('data-id'));
			}
		}
		if (!selectEvent){
			assignSelectEvent();
		}
		options.list.dispatchEvent(selectEvent);
	};
	
	function setHandler(){
		options.list.addEventListener('click', checker)
	};
	
	function getSelected(){
		var selected = [];
		for (var i = 0; i < listOfLi.length; ++i){
			var elem = listOfLi[i];
			if (elem.classList.contains('Color-green')){
				selected.push(elem.innerText);
			}
		}
		return selected;
	};
	
	this.prepare = function(){
		setDataIds();
		setHandler();
	};
	
	this.getSelected = getSelected;
	this.getList = function(){
		return options.list;
	}
};

var ts = new textSelection({'list': document.getElementById('list')});
ts.prepare();
var button = document.createElement('button');
/*
button.innerText = 'click';
button.onclick = function(){
	console.log('Selected: ' + ts.getSelected());
}
document.body.appendChild(button)
*/
var elem = ts.getList();
elem.addEventListener('select', function(e){
	console.log(e.detail());
})