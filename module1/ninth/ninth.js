'use strict';

let inputNumber = parseInt(prompt('Prime number'))
let text;
let isPrime = true;

if (inputNumber === 1) {
    text = '1 is not prime or composite number'
    document.getElementById('text').innerHTML = text
} else if (inputNumber > 1) {
    for (let i = 2; i < inputNumber; i++) {
        if (inputNumber % i === 0) {
            isPrime = false;
            break;
        }
    } if (isPrime) {
        text = `Number ${inputNumber} is a prime number`
        document.getElementById('text').innerHTML = text
    } else {
        text = `Number ${inputNumber} is not a prime number`
        document.getElementById('text').innerHTML = text
    }
} else {
    text = `Number ${inputNumber} is not a prime number`
    document.getElementById('text').innerHTML = text
}
