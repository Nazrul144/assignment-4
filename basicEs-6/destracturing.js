const actor = {
    name: 'Shakib Khan',
    age: 40,
    phone: '0174893432',
    address: 'Dhaka'
}



// If right side is an object so left side of destructuring will be an object as well.


const {phone, age: boy} = actor

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boy);

//Array destructuring:
const numbers = [30,40];
const [num1, num2] = numbers;

console.log(num1, num2);


function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(2, 3);
console.log(prothom, ditiyo);

const numbers = [10,20,30,40];
const [a,,c,d] = numbers;
console.log(a,c,d);
