'use strict';

let list = document.getElementById('target');


let listItem = document.createElement('li');
listItem.innerText = 'First item'
list.appendChild(listItem);

listItem = document.createElement('li');
listItem.innerText = 'Second item'
listItem.classList.add("my-item");
list.appendChild(listItem);

listItem = document.createElement('li');
listItem.innerText = 'Third item'
list.appendChild(listItem);



