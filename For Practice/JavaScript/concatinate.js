// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

let numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let newString = "'";

for (let item of numbers){
    newString = newString+item;
}
newString = newString + "'";

console.log(newString);



