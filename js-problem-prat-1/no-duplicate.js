//Take an Array and remove the duplicate value from the array.

function noDuplicate(array){
    let newArray = [];
    for(let item of array){
        if(newArray.includes(item) === false){ //includes() function check the duplicate item.
            newArray.push(item); //Push () function puts the array item into the empty array.
        }
    }
    console.log(newArray);
}


const friends = ['Rahim', 'Karim', 'Jadu','Modu','Kodu', 'Rahim', 'Karim','Bisu', 'Koltu', 'Gorongo', 'Koltu', 'Mizan'];
const numbers = [1, 2, 3, 4, 5, 6, 4, 3, 1, 6, 9, 10, 21, 22, 8, 32];

noDuplicate(numbers);