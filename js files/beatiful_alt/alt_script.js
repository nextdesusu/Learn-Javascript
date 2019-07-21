"use strict";

function replaceIMG(){
	var toReplace = document.getElementsByClassName("img-replace");
	for (var i = 0; i < toReplace.length; ++i){
		toReplace[i].innerHTML = "<img src = " + toReplace[i].getAttribute("data-src") + "></img>";
	}
}

window.onload = function(){
	setTimeout(replaceIMG, 1000);
}
/*
right version
function replaceImg() {
      var divs = document.querySelectorAll('div.img-replace');
      for (var i = 0; i < divs.length; i++)(function(i) {
        var img = document.createElement('img');
        img.src = divs[i].getAttribute('data-src');
        img.className = 'img-replace';

        img.onload = function() {
          divs[i].parentNode.replaceChild(img, divs[i]);
        }

      }(i))
    }

    setTimeout(replaceImg, 1000); // задержка на 1 сек для демонстрации
*/