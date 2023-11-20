'use strict';
const names = ['John', 'Paul', 'Jones'];
let list = document.getElementById('target');
names.forEach(name => {
    console.log(name, 'NAME');
    let item = document.createElement('li');
    item.innerText = name
    list.appendChild(item);
})