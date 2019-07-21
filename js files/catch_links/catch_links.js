function catchClick(e){
	var target = e.target;
	if (target.tagName === 'A'){
		if (confirm('Хотите ли вы перейти на: ' + target.getAttribute('href'))){
			console.log('y')
		}
		else {
			e.preventDefault();
		}
	}
}

var contents = document.getElementById('contents');
contents.addEventListener('click', catchClick);

/*
contents.onclick = function(evt) {
  var target = evt.target;

  function handleLink(href) {
    var isLeaving = confirm('Уйти на ' + href + '?');
    if (!isLeaving) return false;
  }

  while (target != this) {
    if (target.nodeName == 'A') {
      return handleLink(target.getAttribute('href')); // (*)
    }
    target = target.parentNode;
  }
};
*/