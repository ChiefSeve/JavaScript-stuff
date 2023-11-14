'use strict';

let candidatesArray = [

];
let canObj = {
    'name':'',
    'votes':0
};
function numberOfCan(numberOfCandidates){
    for (let i = 0; i<numberOfCandidates;i++){
        const newCan = Object.create(canObj);
        newCan.name = prompt(`Name for candidate ${i+1}`);
        candidatesArray.push(newCan);
    }
}
function vote(numberOfVoters){
    for (let i = 0; i < numberOfVoters; i++) {
        const candidateVoted = prompt('Who do you vote for');
        candidatesArray.forEach(candidate =>{
            if (candidateVoted === candidate.name) {
                candidate.votes++;
            } else if(candidateVoted==='') {
                console.log('Voted nobody');
            }
        })
    }
}

function winner(canArray){
    console.log(`The winner is ${canArray[0].name} with ${canArray[0].votes} votes.`);
    console.log('Results:');
    canArray.forEach(can =>{
        console.log(`${can.name}: ${can.votes} votes`);
    });
}

numberOfCan(parseInt(prompt('Number of candidates')));
vote(parseInt(prompt('Number of Voters')));
candidatesArray.sort((a, b) => {
    return b - a;
});

winner(candidatesArray);