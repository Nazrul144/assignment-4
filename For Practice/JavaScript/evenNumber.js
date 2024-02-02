// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

let numbers = [12, 98, 5, 41, 23, 78, 46];
 let store = [];
for(let i = 0; i< numbers.length; i++){
    let num = numbers[i];
    if(num % 2 === 0){
        store.push(num);
    }
}
console.log(store);

