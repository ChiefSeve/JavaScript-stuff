'use strict';
const answer = confirm('Should I calculate the square root?');
let display;

if (answer === true){
    let rootNumber = prompt('Number');
    display = Math.sqrt(parseInt(rootNumber))
    if (display > 0 && typeof display === 'number') {
        document.getElementById('text').innerHTML = display
    } else {
        display = 'The square root of a negative number is not defined'
        document.getElementById('text').innerHTML = display
    }
} else {
    display = 'The square root is not calculated';
    document.getElementById('text').innerHTML = display

}