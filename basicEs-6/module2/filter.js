// According to condition to select something is called is filter. 

//Write a program that take an array and select the number over 20:

const numbers = [20, 23, 5, 34, 21, 10, 22, 31, 11, 16, 43, 42];

const selected = numbers.filter(p => p>20);
const even = numbers.filter(x => x%2 === 0);
console.log(even);
// console.log(selected);

//Printing even friend.
const friends = ['Nazrul', 'Raju', 'Rahim', 'Joy', 'Nannu', 'Tomal', 'Taskin', 'Rowja', 'Rishad'];

const evenFiriends = friends.filter( fri => fri.length%2 === 0);
console.log(evenFiriends);