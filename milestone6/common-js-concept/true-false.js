/*
Truthy:
1.true.
2.Any number like positive or negative will provide truthy other than 0.
3.Any string will be truthy other than empty string.
4. String with space will be truthy.
5. Empty object is a truthy.
5. Empty array is a truthy.
Falsy:
1.false
2. 0
3. '' (empty) string.
4. Undefined is a falsy.
5. Null is a falsy.
*/
let x = [] ;
if(x){
    console.log("Value of x is truthy");
}
else{
    console.log("Value of x is falsy");
}

//Optional:
//check falsy
const y = '';

if(!y){
    console.log("The value is falsy");
}

//check truthy:

const z = ' ';
if(!!z){
    console.log("The value is truthy");
}