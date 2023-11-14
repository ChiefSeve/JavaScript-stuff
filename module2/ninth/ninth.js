'use strict';

function even(numberArray){
    let evenArray = [];
    numberArray.forEach(number =>{
        if (number % 2 ===0){
            evenArray.push(number)
        }
    })
    return evenArray
}
const array =[1,2,3,4,5,6,7,8,9,10]
let evenArray = even(array)
console.log(array)
console.log(evenArray)