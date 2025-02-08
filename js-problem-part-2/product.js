//Calculate the total products price.

const items = [
    {name: 'Shampoo', price: 300, quantity: 2},
    {name: 'Chiruni', price: 100 ,quantity: 3},
    {name: 'Shirt', price: 700 ,quantity: 5},
    {name: 'Pant', price: 1200, quantity: 1},
]

function shopping(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price * product.quantity;
    }
    return sum;
}


const total = shopping(items);
console.log(total);