'use strict';

let numberOfDice = parseInt(prompt('Number of dice'))
let sumOfEye = parseInt(prompt('Sum'))
const min = Math.ceil(1);
const max = Math.floor(6);
let chance = 0;

for (let i = 0; i < 10000; i++){
    let sum = 0;
    for (let i = 0; i < numberOfDice; i++){
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        sum = sum + randomNumber
        if (sum === sumOfEye) {
            chance++
        }
    }
}
let display = `Probability to get sum ${sumOfEye} with ${numberOfDice} dice is ${chance.toFixed(2)/100}%`

document.getElementById('text').innerHTML = display;