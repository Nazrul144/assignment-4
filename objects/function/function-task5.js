// Task-5
// Write a function called odd_even() which takes an integer value and tells whether
//  this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
    if(num % 2 === 0){
        let abc = 'Even';
        return abc;
    }
    else{
        const odd = 'Odd';
        return odd;
    }
}


const received = odd_even(9);

console.log(`The number is : ${received}`);