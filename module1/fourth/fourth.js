// Harry potter
'use strict';

    let min = Math.ceil(1);
    let max = Math.floor(4);
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    let name = prompt('name: ')
    switch (random_number){
        case 1 :
            document.getElementById('text').innerHTML `${name}, you are Gryffindor`;
            break;
        case 2 :
            document.getElementById('text').innerHTML = `${name}, you are Slytherin`;
            break;
        case 3 :
            document.getElementById('text').innerHTML = `${name}, you are Hufflepuff`;
            break;
        case 4 :
            document.getElementById('text').innerHTML = `${name}, you are Ravenclaw`;
            break;
        default :
            document.getElementById('text').innerHTML = 'invalid'
    }

