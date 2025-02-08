//Write an odd number of array then convert it into even number of array:

const numbers = [1,3,5,7,9];

let newArray = [];
for(let number of numbers){
    let sum = number+1;
    newArray.push(sum);
}
console.log(newArray);

const result = numbers.map(p => p+1);
console.log(result);