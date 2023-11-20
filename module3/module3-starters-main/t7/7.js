'use strict';
let pic = document.getElementById('target');

function changePic(){
    pic.src = 'img/picB.jpg';
}

function revertPic(){
    pic.src = 'img/picA.jpg';
}