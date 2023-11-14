'use strict';

const min = Math.ceil(1);
const max = Math.floor(6);
const list = document.getElementById('list');
let rolls = [];
let isTrue = true;

function randomDiceRoll(){
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

while (isTrue){
    let roll = randomDiceRoll();
    if (roll === 6) {
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