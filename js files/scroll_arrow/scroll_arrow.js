var arrow = document.getElementById('arrow');
arrow.hidden = true;
var prevY = 0;
var onTop = true;
arrow.classList.add('up');

function addAndRemoveArrowClass(ClassToAdd, ClassToRemove){
	arrow.classList.remove(ClassToRemove);
	arrow.classList.add(ClassToAdd);
}

function posArrow(){
	var offset = window.pageYOffset;
	if (offset > screen.height){
		arrow.hidden = false;
	}
	if (offset > 0){
		onTop = false;
		addAndRemoveArrowClass('up', 'down');
	}
	else {
		onTop = true;
		addAndRemoveArrowClass('down', 'up');
	}
	arrow.onclick = function(){
		if (!onTop){
			scrollTo(0, 0);
			prevY = offset;
		}
		else {
			scrollTo(0, prevY);
		}
	}
}

window.addEventListener('scroll', posArrow)