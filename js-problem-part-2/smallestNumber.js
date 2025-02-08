// Find the smallest number from an array by using function.

function smallest(numbers){
    let min = numbers[0]; // Setting up the initail value
    for (let item of numbers){
        if(item < min){         //Compare each elements
            min = item;        // Storing the update value.
        }
    }
    return min;
}

const values = [ 20, 30, 59, 69, 84, 10, 22, 34, 91, 21, 34, 54, 85];
const result = smallest(values);

console.log("The smallest value of the array elements is : ", result);

