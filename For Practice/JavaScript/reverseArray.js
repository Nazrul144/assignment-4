// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let store = [];

for(let i= 0; i<colors.length; i++){
    let num = colors[i];
    store.unshift(num);
}
console.log(store);