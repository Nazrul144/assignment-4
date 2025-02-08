let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



let store = [];

// Reverse side:

for(let i = numbers.length -1; i>=0; i--){
   let num = (numbers[i]);
    store.push(num);
}
console.log(store);