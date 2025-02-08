//Find out the most expensive phone from an array by using function.


function objectOfPhone(phones){
    let max = phones[0];
    for(let phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const phones = [
    {name: 'Smasung', price: 90000, camera:'48MP', color:'Black', battery:'5000Ah'},
    {name: 'Xomi', price: 18000, camera:'56MP', color:'Black', battery:'5000Ah'},
    {name: 'Nokia', price: 40000, camera:'18MP', color:'Black', battery:'5000Ah'},
    {name: 'Iphone', price: 100000, camera:'188MP', color:'Black', battery:'5000Ah'},
    {name: 'Oppo', price: 32000, camera:'24MP', color:'Black', battery:'5000Ah'},
    {name: 'Redmi', price: 62000, camera:'120', color:'White', battery:'5000Ah'},
    {name: 'King Tell', price: 12000, camera:'24MP', color:'Black', battery:'5000Ah'},
]

let maxPrice = objectOfPhone(phones);
console.log("The height price of the phone is :", maxPrice);
