// Create a function and that takes an array as parameter then make their average of odd numbers.

function oddAverage(numbers){
    const odds = [];
    for(let number of numbers){
        if(number % 2 === 1){
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

const num = [2, 3, 5, 34, 37, 65, 89, 4, 102, 13, 233];
const avgResult = oddAverage(num);

console.log(`The average of the odd numbers are: ${avgResult.toFixed(2)}`);