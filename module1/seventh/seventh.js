'use strict';

let diceAmount = prompt('Dice amount')
let sumOfDice = 0;
const min = Math.ceil(1);
const max = Math.floor(6);

for (let i = 0; i < diceAmount; i++){
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    sumOfDice = sumOfDice + random_number
}

document.getElementById('text').innerHTML = `Sum is ${sumOfDice}`