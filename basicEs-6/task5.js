//Write an arrow function and take an array with some values then square of them and perform sum operation on them and finally 
//bring out the average value of the sum.

const square = (numbers) => {
    let sum = 0;
    for(const number of numbers){
        const square = number*number;
        sum = sum + square;
       
    }
    const average = sum/numbers.length;
    return average
}

const numbers = [2,3,4,5,6,7,8,9,10];

const result = square(numbers);


console.log(`The average value of square of the array is: ${result.toFixed(3)}`);
