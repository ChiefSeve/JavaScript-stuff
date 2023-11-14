'use strict';

function concat(stringArray){
    let newString = '';
    stringArray.forEach(string  => {
        newString = newString+string;
    });
    return newString
}
let array = ['foo','bar','lore','ipsum']
let combinedString = concat(array)
document.getElementById('text').innerHTML = combinedString