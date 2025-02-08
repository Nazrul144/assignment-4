const glass = {
    name: 'glass',
    color: 'red',
    material: 'Plastic',
    isClean: true,
    price:12
}

// Keys will provide all property name:
const keys = Object.keys(glass);
console.log(keys);

//Values will provide all values of the property:
const values = Object.values(glass);
console.log(values);

//Entries will provide property and value together into an array that's called two dimensional array. Or array of array.
const pair = Object.entries(glass);
console.log(pair);

delete glass.color;

const {isClean,... newGlass} = glass;
console.log(newGlass);

//Adding Object property and value:
glass.source = 'Bangladesh';
console.log(glass);

//Updating price of the object
glass.price = 40000;
console.log(glass);

//Freeze: Now we cannot manipulate the object:
Object.freeze(glass)
glass.brand = 'RFL';
console.log(glass);

delete glass.name;
console.log(glass);
