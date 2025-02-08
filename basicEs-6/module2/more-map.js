const numbers = [2, 4, 6, 8, 10];

const result  = numbers.map(num =>num*2);
console.log(result);

//Adding five with array elements:

const add = numbers.map(num => num+5);
console.log(add);

//Half of array elements: 
const divide = numbers.map(num => num/2);
console.log(divide);

//String length:

const friends = ["Raju", "Rakib", "Fahad", "Koltu", "Joy", "Maruf", "Bali", "Rahim", "Faysal","Alamin"];

const length = friends.map(frind => frind.length);
const firstLatter = friends.map(first => first[0]);
console.log(firstLatter);
console.log(length);


