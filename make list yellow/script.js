elems = document.getElementsByTagName("li")

for (var i = 0; i < elems.length; ++i){
	if ((elems[i].textContent.startsWith("http") ||
	elems[i].textContent.startsWith("ftp")) &&
	!elems[i].textContent.startsWith("http://internal.com/test")){
		elems[i].classList.add("external")
	}
}