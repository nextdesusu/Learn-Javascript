"use strict";

function Voter(options){
	var elem = options.elem;
	var down = elem.children[0];
	var vote = elem.children[1];
	var up = elem.children[2];
	var step = +options.step || 1;
	
	function getVote(){
		return Number(vote.innerText)
	}
	
	function setVote(amount){
		vote.innerText = amount;
		var changeEvent = new CustomEvent("change", {
			bubbles: true,
			detail: vote.innerText,
		});
		elem.dispatchEvent(changeEvent);
	}
	
	function setHundlers(){
		down.onclick = function(){
			setVote(getVote() - step);
		};
		up.onclick = function(){
			setVote(getVote() + step);
		};
	}
	
	setHundlers();
	this.setVote = setVote;
}


var voter = new Voter({
	elem: document.getElementById('voter'),
	step: 3,
});

voter.setVote(5);

document.getElementById('voter').addEventListener('change', function(e) {
  alert( e.detail ); // новое значение голоса
});