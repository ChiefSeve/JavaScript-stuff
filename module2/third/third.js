'use strict';
let dogArray = [];
let list = document.getElementById('list');

for (let i =0;i<6;i++){
    let dog = prompt('Dog name');
    dogArray.push(dog);
}

dogArray.sort();
dogArray.reverse();

console.log(dogArray, 'ARRAY');

for (let j = 0; j < dogArray.length; j++){
    let li = document.createElement('li');
    li.innerText = dogArray[j];
    list.appendChild(li);

}