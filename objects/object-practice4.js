//Create an object with some property then count the number of the property of the object.

let person = {
    name:'Nazrul Islam',
    age:30,
    religion:'Islam',
    skin: 'chocolate',
    height: "5.5' ",
    married:false,
    education:['ssc','diploma','bsc']
}

let count = Object.keys(person).length // Here I have used the method "Object.keys" to find the length of the object property.

console.log(count);