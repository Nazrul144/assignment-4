const products = [
    {name: 'Xiomi phone', price: 13000, color:'black'},
    {name: 'Nokia Phone', price: 13000, color:'blue'},
    {name: 'Iphone A15', price: 13000, color:'black'},
    {name: 'Dell Laptop', price: 33000, color:'white'},
    {name: 'Lenovo phone', price: 19300, color:'black'},
    {name: 'Samsung', price: 13000, color:'black'},
    {name: 'Symphony one plus phone', price: 13000, color:'oragne'},
    {name: 'King tell', price: 13000, color:'black'},
    {name: 'Sony Raxion plus', price: 1600000, color:'black'},
    {name: 'Balck berry phone I ze', price: 13000, color:'black'},
    {name: 'Hp LAPTOP', price: 1300000, color:'red'},
    {name: 'POCO M3 PHONE', price: 16000, color:'yellow'},
]

function search(products, search){
    let newItem = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            newItem.push(product);
        }
    }
    console.log(newItem);
}

search(products, 'phone');