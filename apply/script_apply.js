function showFullName() {
	alert( this.firstName + " " + this.lastName );
}

var Ivan = {
	firstName: "Ivan",
	lastName: "Ivanov",
};

function getFullName(person){
	return showFullName.apply(person);
}

function printer(){
	var size = this.length;
	if (size === 'undefined'){
		return;
	}
	for (var i = 0; i < this.length; i++){
		console.log(this[i]);
	}
}

/*
var a = [1, 3, 5, 7];
Array.prototype.printer = printer;
a.printer();
*/

function sum(arr) {
  return arr.reduce(function() {
    var res = 0;
	for (var elem in arguments){
		res += +elem;
	}
	return res;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)