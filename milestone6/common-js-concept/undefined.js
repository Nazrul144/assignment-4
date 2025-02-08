//8 ways to get undefined.

//1.Variable that is not initialized will give undefined.
//2. Function with no return will give undefined.
//3. Parameter that is not passed will be undefined.
//4. If return has nothing on the right side will return undefined.
//5 If any property does not exist in the object, so for that property will provide undefined.
//6 Accessing array elements outside the array range will provide undefined.
//7 Deleting an element inside an array will provide undefined.
//8 Set a value directly will provide undefined.

//Way-1:
let name;
// console.log(name); // Undefined.

//Way-2:
function sum(a,b){
    const total = a+b;
}

const result = sum();
// console.log(result);

// Way-3:
function mul(a,b,c){
    const result = a*b*c;
    console.log(a,b,c)
}
const totalValue = mul(2,3);

//Way-4:
function noNegative(a,b){
    if(a<0 || b<0){
        return
    }
    else{
        return a+b;
    }
}
const sumOfValue = noNegative(2,-3);
// console.log(sumOfValue);

//Way-5
const person = {
    name:'Nazrul Islam',
    id:21100,
    age:30,
}
console.log(person.name, person.salary);

//Way-6:
// const numbers = [10,20,30,40,50,60,70,80];
// delete numbers[3]

// console.log(numbers[3], numbers[5], numbers[20]);


// Way-7:

const love = undefined;
console.log(undefined);

//Way-8:
const value = null;
console.log(value);

