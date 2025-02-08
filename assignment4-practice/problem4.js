//Create a function named findAddress() and that will take an object as an input.
//Object will have 3 property. 
//The sample output will be like: 10, 15A, Earth Perfect.
//Finally, if any property of the object is missing in that case you have to replace is with double underscore __.

function findAddress(object){
    const street = object.street || "__";
    const house = object.house || "__";
    const society = object.society || "__";

    
    const str = `${street},${house},${society}`;
    return str;
}



const object = {
    street: 10,
   
    society:'Earth Perfect'
}
console.log(findAddress(object));