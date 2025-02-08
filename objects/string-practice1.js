// Create a string and find how many time the latter a belongs to the string.
let country = 'Bangladesh';
let tragetLetter = 'a';

let count = 0;

for(let i = 0; i<country.length; i++){
    if(country[i].toLocaleLowerCase() === tragetLetter.toLocaleLowerCase()) // toLo
    {
        count++;
    }
}
console.log('The latter',tragetLetter, 'is', count, 'times');
