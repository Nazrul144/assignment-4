//Create a function named sortMaker() and the function of parameter will be an array.
//Array will contain two elements.
//If two number of array is a positive then, show it descending order.
//If both numbers are equal, then return equal.
//Finally, if user provides the negative number in the array, then show the message "Invalid Input";


function sortMaker(array){
    const [a, b] = array;
    if(a <0 || b <0){
        return "Invalid Input";
    }
    else if(a === b){
        return "equal";
    }
    else if(a > b){
        return [a, b];
    }
    else{
        return [b, a];
    }
}

console.log(sortMaker([4,2]));