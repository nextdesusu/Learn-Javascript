// создадим элемент с прокруткой
var div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// при display:none размеры нельзя узнать
// нужно, чтобы элемент был видим,
// visibility:hidden - можно, т.к. сохраняет геометрию
div.style.visibility = 'hidden';

document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

alert( scrollWidth );