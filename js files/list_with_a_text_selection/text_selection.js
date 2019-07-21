var ul = document.getElementById('list');
var listOfLi = ul.getElementsByTagName('li');
for (var i = 0; i < listOfLi.length; ++i){
	listOfLi[i].setAttribute('data-id', i);
}

var previousTarget = 0;

function checker(e){
	console.log(previousTarget)
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
}

ul.addEventListener('click', checker)