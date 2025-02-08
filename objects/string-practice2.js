// Create a string and find how many time the latter a or A belongs to the string.
let country = 'Ammajan';
let tragetLetter = 'a';

let count = 0;

for(let i = 0; i<country.length; i++){
    if(country[i].toLowerCase() === tragetLetter.toLowerCase()) 
    {
        count++;
    }
}
console.log('The latter',tragetLetter, 'is', count, 'times');
