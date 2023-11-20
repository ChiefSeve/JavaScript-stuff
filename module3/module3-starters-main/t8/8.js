'use strict';

function calculate(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let option = document.getElementById('operation').value;
    let result;
    let resultField = document.getElementById('result');
    switch (option){
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case'multi':
            result = num1 * num2;
            break;
        case'div':
            result = num1 / num2;
            break;
    }
resultField.innerText = result;
}