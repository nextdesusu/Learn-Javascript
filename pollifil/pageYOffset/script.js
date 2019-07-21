"use strict";

var show = (some) => console.log(some)

Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});


Object.defineProperty(window, 'lol', {
  get: function() {
    return "lol";
  }
});

show(window.lol)
show("lol")