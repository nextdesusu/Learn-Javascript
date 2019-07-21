var done = false;
answer = "some text";
my_ul = document.getElementsByName("my_ul")[0];
while (!done){
	li = document.createElement('li');
	answer = prompt("input a name", answer);
	if (!answer){
		done = true;
		break;
	}
	li.innerText = answer;
	my_ul.appendChild(li);
}