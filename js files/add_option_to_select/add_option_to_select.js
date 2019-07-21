"use strict";

var select = document.forms.musicForm.genre;

var selectedOption = select.options[select.selectedIndex];
alert( selectedOption.value  + " - " + selectedOption.text );

var genre = document.forms.musicForm.genre;
var option = new Option("Классика", "classic", true, true);
genre.appendChild(option);