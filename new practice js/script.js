function CompareTime(func1, func2, time){
	var res1 = 0;
	var res2 = 0;
	var time1, time2;
	for (var i = 0; i < time; i++){
		time1 = performance.now();
		func1()
		time1 = performance.now() - time1;
		time2 = performance.now();
		func2()
		time2 = performance.now() - time2;
		res1 += time1;
		res2 += time2;
	}
	res1 /= time;
	res2 /= time;
	var result = res1 -= res2;
	console.log("Среднее время выполнение функции " + func1.name + ": " + res1);
	console.log("Среднее время выполнение функции " + func2.name + ": " + res2);
	console.log("Разница в выполнении: " + result);
}

function ByTag(){
	var elems = document.getElementsByTagName("li");
	for (var i = 0; i < elems.length; i++){
		var res = elems[i];
	}
}

function ByQuery(){
	var elems = document.querySelectorAll("li");
	for (var i = 0; i < elems.length; i++){
		var res = elems[i];
	}
}

CompareTime(ByTag, ByQuery, 10000)