'use strict';
let isTrue = true
let numberArray  = []

while (isTrue) {
    let number = parseInt(prompt('Number, 0 exit'));
    if (number === 0) {
        isTrue = false;
    } else {
        numberArray.push(number);
    }
}
numberArray.sort(function(a, b) {
    return a - b;
});
numberArray.reverse();
for (let i =0; i<numberArray.length;i++) {
    console.log(numberArray[i]);
}