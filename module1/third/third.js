'use strict';

let number1 = prompt('First number')
let number2 = prompt('Second number')
let number3 = prompt('Third number')
let total = parseInt(number1) + parseInt(number2) + parseInt(number3)

document.getElementById('text').innerHTML = `Total is ${total}`