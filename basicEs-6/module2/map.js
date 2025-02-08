//Map loops through each elements of an array and do the operation that you passed in the callback function. And holds the result
//from each operation and finally return you an array.
const numbers = [2, 3, 4, 5, 6];

const doubled = [];
for(const number of numbers){
    const mul = number * 2;
    doubled.push(mul);
}

console.log(doubled);

const numbers = [2, 3, 4, 5, 6];

function doubleIt(num) {
    console.log(num);
    return num *2
}

const result = numbers.map(doubleIt);
console.log(result);

const result = n => n*2;

const total = numbers.map(result);
console.log(total);