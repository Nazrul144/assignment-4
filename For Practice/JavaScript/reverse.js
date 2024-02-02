let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//There are some certain ways to revers string such as for loop, for in loop reverse function. Let's see one by one.

let store = [];

for (let i = 0 ; i<array.length; i++){
    let num = array[i];
    store.unshift(num);
}

console.log(store);
