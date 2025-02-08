// Task-4
// Write a function called count_zero() which will take a binary string 
// (Binary string is a string which is consist of only 0 and 1) as parameter
//  and count how many 0’s are there in that string.

function count_zero(binaryNum){
 console.log(binaryNum)
 let count = 0;
 for(const item of binaryNum){
    if(item === '0'){
        count++;
       
    }
 }
 return count;
}

const total = count_zero('1100101011010110001010010');

console.log(`The total zeor's of the string is: ${total}`);

// Problem is solved! 