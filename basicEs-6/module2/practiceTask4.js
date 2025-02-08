//Write a program which takes some elements and these are divided by 10:
const numbers = [33, 50, 79, 78, 90, 101, 30];

let newArray = [];
for(let number of numbers){
    if(number%10 ===0){
        newArray.push(number);
    }
}

console.log(newArray);

const final = numbers.filter(p => p%10 ===0);
console.log(final);

// Using array of find method:
console.log(newArray);

const result = numbers.find(p => p%10 ===0);
console.log(result);