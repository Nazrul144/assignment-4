// Task-3
// Write a function called make_avg() which will take an array of integers
//  and the size of that array and return the average of those values.

function make_avg(received){
    let sum = 0;
    for(const item of received){
        sum=sum+item;   
    }
    return sum;
}

const score = [10, 20, 30, 40, 50, 60, 70];
const total = make_avg(score);

console.log(total);