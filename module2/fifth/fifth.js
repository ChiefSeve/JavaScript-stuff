'use strict';

let numberArray = [];
let isTrue = true;

while (isTrue){
    let number = parseInt(prompt('Number'));
    if (numberArray.includes(number)){
        console.log(`Number ${number} has been given, stopping program`)
        isTrue = false;
    } else {
        numberArray.push(number);
    }
}

numberArray.sort(function(a, b) {
    return a - b;
});

for (let i =0; i<numberArray.length;i++) {
    console.log(numberArray[i]);
}