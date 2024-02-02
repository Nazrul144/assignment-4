// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let store = [];

let i = 0; 
for (let color of colors){
    let num = color;
    store.unshift(num);
}
console.log(store);