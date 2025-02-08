const prop = document.querySelectorAll('section');

for(const section of prop){
    section.style.border = '2px solid blue';
    section.style.borderRadius = '10px';
    section.style.marginBottom = '5px';
    section.style.backgroundColor = 'lightgray';
}

const places = document.getElementById('container');

places.style.backgroundColor = 'yellow';

