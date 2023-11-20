'use strict';

function calculate(){
    let calculation = document.getElementById('calculation').value;
    let numbers = [];
    let result = 0;
    let resultField = document.getElementById('result');
    const add = '+';
    const sub = '-';
    const multi = '*';
    const div = '/';
    if (calculation.includes(add)){
        numbers = calculation.split(add);
        result = parseInt(numbers[0]) + parseInt(numbers[1]);
    } else if (calculation.includes(sub)){
        numbers = calculation.split(sub);
        result = parseInt(numbers[0]) - parseInt(numbers[1]);
    } else if (calculation.includes(multi)) {
        numbers = calculation.split(multi);
        result = parseInt(numbers[0]) * parseInt(numbers[1]);
    } else if (calculation.includes(div)) {
        numbers = calculation.split(div);
        result = parseInt(numbers[0]) / parseInt(numbers[1]);
    }
    resultField.innerText = result.toString();
}