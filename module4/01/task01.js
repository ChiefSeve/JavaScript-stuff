'use strict';

const tvQuery = document.querySelector('#tvId');
tvQuery.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const querySearch = '?q='
    let query = document.querySelector('input[name=q]').value;
    if(query !== '') {
        query = querySearch + query
    }
    const url = tvQuery.action;
    try {
        const response = await fetch(`${url}${query}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();
        jsonData.forEach(show => {
            console.log(show.show)
        })
    } catch (error) {
        console.log(error.message);
    }
});