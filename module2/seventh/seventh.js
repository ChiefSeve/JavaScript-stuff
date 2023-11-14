'use strict';

const list = document.getElementById('list');
let rolls = [];
let isTrue = true;

function randomDiceRoll(diceSize){
    const min = Math.ceil(1);
    let max = Math.floor(diceSize);
    return  Math.floor(Math.random() * (max - min + 1) + min);
}
let diceSize = 100
while (isTrue){
    let roll = randomDiceRoll(diceSize);
    if (roll === diceSize) {
        rolls.push(roll);
        isTrue = false;
    } else {
        rolls.push(roll);
    }
}

for (let j = 0; j < rolls.length; j++){
    let li = document.createElement('li');
    li.innerText = rolls[j];
    list.appendChild(li);

}