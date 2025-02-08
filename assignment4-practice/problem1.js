//Create a function named cubeNumber();
//Function will receive an input which will be number.
//Then make the number of cube and return it from the function.
//If user provide other value instead of number, then provide a meaningful message.


function cubeNumber(number){
    if( typeof number !== 'number'){
        return "Please provide a valid number!"
    }
    const result = Math.pow(number, 3);
    return result;
}

console.log(cubeNumber(4));