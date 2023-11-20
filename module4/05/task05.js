'use strict';

async function chuckNorris(){
    try {
        const resp = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await resp.json();
        console.log(data.value)
    } catch (error){
        console.log(error)
    }
}
