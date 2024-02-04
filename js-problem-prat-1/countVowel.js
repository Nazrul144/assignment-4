// Task-3:
// Write a function to count the number of vowels in a string.

function vowelCheck(str){
    const newArray = str.split("");
    let count = 0;
    for(let i = 0; i<newArray.length; i++){
        if(newArray[i] === 'a' || newArray[i] === 'e' || newArray[i] === 'i' || newArray[i] === 'o' || newArray[i] === 'u'){
            count++;
        }
    }

    return count;
}


const word = "Beautiful";

const result = vowelCheck(word.toLowerCase());

console.log(result);