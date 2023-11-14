'use strict';
let numberArray= []

for(let i=0; i<5;i++){
    let number = prompt('Number');
    numberArray.push(number);
}

for (let j = numberArray.length-1; j>=0;j--){
    console.log(numberArray[j]);
}

