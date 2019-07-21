var div = document.getElementById("field");
var ball = document.getElementById("ball");
var center_x = ball.clientWidth / 2
var center_y = ball.clientHeight / 2
//div.style.border = '20px';
//ball.style.width = '20px';
ball.style.paddingLeft = (div.clientWidth / 2 - center_x) + 'px';
ball.style.paddingTop = (div.clientHeight / 2 - center_y) + 'px';
//Not good cause size changing lead to bugs