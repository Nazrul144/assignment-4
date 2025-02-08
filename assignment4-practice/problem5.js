//Create a function named canPay(); 
//The function will take two input. First input will be an array and second input will be a number.
// Make sum all of the array element.
//If the sum of array value is greater than or equal to the number, then return true.
//If the sum of array value is less than the number , then return false.
//Finally, if the array is empty, then print a meaningful message.

function canPay(array, number){
    if(array.length === 0){
        return "Your array is empty";
    }
    let sum = 0;

  for (let i = 0; i<array.length; i++){
        sum = sum + array[i];
  }
    if(sum >= number){
        return true;
    }
    else{
        return false;
    }
}

console.log(canPay([6,4,5,1], 40));