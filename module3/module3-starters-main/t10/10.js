'use strict';

const form = document.getElementById('source')
let fullName = '';
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    console.log(formData.get('firstname'));
    fullName = formData.get('firstname') +' '+ formData.get('lastname');
    /*for (const name of formData.values()) {
        fullName += name ;
    }*/
    console.log(`Your name is ${fullName}`)

})
