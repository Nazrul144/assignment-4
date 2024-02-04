// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

function duplicate(array){

    let newArray = [];
    for(let item of array){
        if(newArray.includes(item) === false){
            newArray.push(item);
        }
    }
    console.log(newArray);
    

}


let  numbers = [5,6,11,12,98, 5];
duplicate(numbers);
