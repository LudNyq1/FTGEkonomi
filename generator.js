'use strict';

const body = document.getElementsByTagName('body');

fetch('/mall.txt').then(x => x.text()).then(text => console.log(text));