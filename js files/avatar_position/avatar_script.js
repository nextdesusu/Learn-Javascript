var avatar = document.getElementById('avatar');
var startLeft = getComputedStyle(avatar).left;
var startTop = getComputedStyle(avatar).top;
var pos = getComputedStyle(avatar).position;
var rect = avatar.getBoundingClientRect()
var bottom = rect.top + rect.height;


function posAvatar(){
	var offset = window.pageYOffset;
	if (offset > bottom){
		avatar.style.position = 'fixed';
		avatar.style.left = '25px';
		avatar.style.top = '10px';
	}
	else {
		avatar.style.position = pos;
		avatar.style.left = startLeft;
		avatar.style.top = startTop;
	}
}

window.addEventListener('scroll', posAvatar)
/*
BETTER VERSION
var avatarElem = document.getElementById('avatar');

    var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

    window.onscroll = function() {
      if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
        avatarElem.classList.remove('fixed');
      } else if (window.pageYOffset > avatarSourceBottom) {
        avatarElem.classList.add('fixed');
      }
    };
*/