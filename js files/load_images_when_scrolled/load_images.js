var images = document.getElementsByTagName('img');

function inRange(elem){
	var coords = elem.getBoundingClientRect();
	var windowHeight = document.documentElement.clientHeight;
	var topVisible = coords.top > 0 && coords.top < windowHeight;
	var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
	return topVisible || bottomVisible;
}

function loadImage(){
	var offset = window.pageYOffset;
	for (var i = 0; i < images.length; ++i){
		if (inRange(images[i])){
			images[i].src = images[i].getAttribute('data-real-src');
		}
	}
}

window.addEventListener('scroll', loadImage)