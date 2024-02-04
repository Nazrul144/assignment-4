// Create a function and that takes an array as parameter then make their average of even number.

function oddAverage(numbers){
    const odds = [];
    for(let number of numbers){
        if(number % 2 === 0){
            odds.push(number);
        }
    }
    let sum = 0;
    for(let number of odds){
        sum = sum + number;

    }
    const len = odds.length;
    const average = sum/len;
    return average;
    
}

const num = [2, 3, 5, 4, 11, 6, 9, 8];
const avgResult = oddAverage(num);

console.log(`The average of the odd numbers are: ${avgResult.toFixed(2)}`);