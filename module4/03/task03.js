'use strict';

const tvQuery = document.querySelector('#tvId');
tvQuery.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    let query = document.querySelector('input[name=q]').value;
    try {
        const result = document.getElementById('result');
        let article = document.createElement('article');
        result.innerText ='';
        const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`);
        const jsonData = await response.json();

        const br = document.createElement('br');

        let name = document.createElement('h2');
        name.innerText = jsonData.name;

        let link = document.createElement('a');
        link.target = '_blank';
        link.href =jsonData.url;
        link.innerText = jsonData.url;

        let image = document.createElement('img');
        image.src = jsonData.image?.medium;
        image.alt = jsonData.name;

        let info = document.createElement('div');
        info.insertAdjacentHTML('beforeend',jsonData.summary);


        article.appendChild(name);
        article.appendChild(link);
        article.appendChild(br);
        article.appendChild(image);
        article.appendChild(info);
        result.appendChild(article);
    } catch (error) {
        console.log(error.message);
    }
});