'use strict';

let startYear = prompt('Start year');
let endYear = prompt('End year');
let leapYearArray = [];
let list = document.getElementById('list');

while (startYear < endYear) {
    if ((0 === startYear % 4) && (0 !== startYear % 100) || (0 === startYear % 400)) {
        leapYearArray.push(parseInt(startYear));
    }
    startYear++;
}
for (let i = 0; i < leapYearArray.length; i++){
    let li = document.createElement('li');
    li.innerText = leapYearArray[i];
    list.appendChild(li);

}