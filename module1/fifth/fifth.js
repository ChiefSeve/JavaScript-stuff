'use strict';

let year = prompt('Year');

if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
    document.getElementById('text').innerHTML = `Year ${year} is a leap year`;
}
else {
    document.getElementById('text').innerHTML = `Year ${year} is not a leap year`;
}
