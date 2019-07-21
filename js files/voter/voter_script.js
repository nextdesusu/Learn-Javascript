"use strict";

var voter = document.getElementById('voter');

function Voter(options){
	var elem = options.elem;
	var down = elem.children[0];
	var vote = elem.children[1];
	var up = elem.children[2];
	var step = options.step || 1;
	
	function getVote(){
		return Number(vote.innerText)
	}
	
	function setVote(amount){
		vote.innerText = amount;
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

var newVoter = new Voter({'elem': voter, 'step': 5,});