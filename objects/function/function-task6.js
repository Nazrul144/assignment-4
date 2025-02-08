// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

function rev_number(num){
    //Step-1: Convert the number into string.
    num = num + "";

    //Step-2: Split the string into an array of character.
    let newArray = num.split("");
    console.log(newArray);
    //Step-3: Now Reverse the array.
    let rev= newArray.reverse();
    console.log(rev);
    //Step-4 Finally join the array's number.
    let jn = rev.join("");
    return jn;
}

let result = rev_number(32243);
console.log(result);