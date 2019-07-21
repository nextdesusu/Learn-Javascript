"use strict";

var div = document.getElementById('moving-div');
div.style.position = 'absolute';
div.style.right = div.style.top = 0;
var new_div = div.cloneNode(true);
new_div.style.position = 'static';
new_div.id = '';
new_div.style.backgroundColor = 'grey';
new_div.innerText = '';
new_div.style.padding = div.offsetHeight / 2 + 'px';
document.body.insertBefore(new_div, document.body.children[1])