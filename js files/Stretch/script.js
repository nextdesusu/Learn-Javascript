var show = function(el){console.log(el)}
var elem = document.getElementById("elem");
var body = document.body;
var add = (parseInt(getComputedStyle(elem).padding)) * 2
show(add)
elem.style.width = body.clientWidth - add + "px"
function parseInt(str){
	var num = '';
	for (var i = 0; i < str.length; ++i){
		var val = Number(str[i]);
		if (typeof val === 'number' && !isNaN(val)){
			num += str[i]
		}
		else{
			break
		}
	}
	return Number(num)
}
//equal to
//elem.style.width = 'auto';
//possible too

//var bodyClientWidth = document.body.clientWidth;

//var style = getComputedStyle(elem);

//var bodyInnerWidth = bodyClientWidth - parseInt(style.paddingLeft) - parseInt(style.paddingRight);

//elem.style.width = bodyInnerWidth + 'px';