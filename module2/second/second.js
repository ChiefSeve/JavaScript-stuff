'use strict';

let numberOfParticipant = parseInt(prompt('Number of participants'));
let participantArray = []
let list = document.getElementById('list');

for(let i =0; i<numberOfParticipant;i++){
    let participant = prompt('participant');
    participantArray.push(participant)
}
participantArray.sort()

for (let j = 0; j < participantArray.length; j++){
    let li = document.createElement('li');
    li.innerText = participantArray[j];
    list.appendChild(li);

}