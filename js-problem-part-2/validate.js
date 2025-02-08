//Write a function and validate the exact value is passed from the argument. 


function validate(num1, num2){

    if(typeof num1 !== 'string'){
        return "Please provide a string";
    }
    else if(typeof num2 !== 'string'){
        return "Please provide a string";
    }
  
    const result = num1 + num2;
    return result;
}


const result = validate('Nazrul', 10);
console.log(result);