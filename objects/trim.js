let name1 = 'Hello';
let name2 = 'Hello ';

//Is both string equal to each other? 
// No, both string are not equal to each other. Because there is a white space in the second variable, that's why cannot be compared. 
// if(name1 === name2){
//     console.log("Both are same");
// }
// else{
//     console.log("Both are not same");
// }


if(name1 === name2.trim()){
    console.log("Both are same"); //Now both string are equal, since we have reduced the white space by using trim function.
}               
else{
    console.log("Both are not same");
}