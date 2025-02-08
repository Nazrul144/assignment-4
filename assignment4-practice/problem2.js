//Create a function name matchFinder() that will take two string input as a parameter.
//If second string is matched with the any part of first string, then return true.
//If both string does not match perfectly, then return false.
//Finally validate both input values are string or not. If not, then provide a meaningful message.

function matchFinder(str1, str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        return "Provide a valid string!";
    }
    const result = str1.includes(str2);
    return result;
}

console.log(matchFinder('John Doe', 'Doe'));



