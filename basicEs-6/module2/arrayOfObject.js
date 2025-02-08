const products = [
    {name:'Lenovo', id: 1, price: 500000},
    {name:'HP', id: 2, price: 450000},
    {name:'dell', id: 3, price: 550000},
    {name:'Mac', id: 4, price: 1500000},
]

//Using Map:


const result = products.map(p => p.name);
console.log(result);

//Foreach:

products.forEach(p => console.log(p.id));

//Filter:

const filterPrice = products.filter(p => p.price>500000);
console.log(filterPrice);