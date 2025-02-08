//Find the duplicate value from an array.

function Duplicate(array){
    const newArray = [];
    count = 0;
    for(let item of array){
        if(newArray.includes(item) === false){
            newArray.push(item);
        }
    }
    console.log(newArray);
}


const numbers = [2, 3, 4, 1, 7, 9, 1, 3, 5, 3, 7, 9, 10];
Duplicate(numbers);
