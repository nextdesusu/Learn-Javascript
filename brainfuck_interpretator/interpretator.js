"use strict";

var commandsInput = document.getElementById('commandsInput');
var compute = document.getElementById('compute');
var consoleWindow = document.getElementById('consoleWindow');
var windowSize = ((screen.width / 2) - 200);
var consoleLine = document.getElementById('consoleLine');
commandsInput.style.width = windowSize  + 'px';
consoleWindow.style.width = windowSize + 'px';

function createZerosArray(){
	var res = [];
	for (var _ = 0; _ < 30000; _++){
		res.push(0);
	}
	return res;
}


compute.onclick = function(){
	consoleLine.innerText = '';
	var cpu = createZerosArray();
	var j = 0;
	var brc = 0;
	var acc = commandsInput.value;
	for (var i = 0; i < acc.length; ++i){
		if (acc[i] == '>'){
			j++;
		}
		if (acc[i] == '<'){
			j--;
		}
		if (acc[i] == '+'){
			cpu[j]++;
		}
		if (acc[i] == '-'){
			cpu[j]--;
		}
		if (acc[i] == '.'){
			consoleLine.innerText += String.fromCharCode((cpu[j]));
		}
		if (acc[i] == ','){
			var input = prompt('Ведите значение');
			cpu[j] = input.charCodeAt(0);
		}
		if (acc[i] == '[') {
            if (!cpu[j]) {
                ++brc;
                while (brc) {
                    ++i;
                    if (acc[i] == '['){
                        ++brc;
					}
                    if (acc[i] == ']'){
                        --brc;
					}
                }
            } else {
                continue;
			}
        } else if (acc[i] == ']') {
            if (!cpu[j]){
                continue;
			}
            else {
                if (acc[i] == ']'){
                    brc++;
				}
                while (brc) {
                    --i;
                    if (acc[i] == '['){
                        brc--;
					}
                    if (acc[i] == ']'){
                        brc++;
					}
                }
            --i;
            }
        }
	}
}