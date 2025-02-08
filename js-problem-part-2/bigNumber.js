//Find the largest number from an array by using a function.


function height(numbers){
    max = numbers[0];           //First set value 10 that belongs to 0 index of the array.
    for(let item of numbers){
        if(item > max){
            max = item;
        }
    }
    return max;
}

const arr = [10, 20, 30, 34, 99, 23, 84, 12, 83, 54, 73, 47];
const result = height(arr);
console.log("The height value of the array is :", result);