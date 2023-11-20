'use strict';

const chuckQuery = document.querySelector('#chuckForm');

chuckQuery.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    let query = document.querySelector('input[name=q]').value;
    let result = document.getElementById('result');
    try {
        const resp = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const data = await resp.json();
        data.result.forEach(joke => {
            let article = document.createElement('article');
            let text = document.createElement('p');
            text.innerText = joke.value;
            article.appendChild(text);
            result.appendChild(article);
        });
    } catch (error){
        console.log(error)
    }
})
