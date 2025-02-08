const car = {
    name: 'Miyako',
    price: 20000000,
    manufacture:'America',
    color: 'blue',
    isClean: true
}

const keys = Object.keys(car);

for(const key of keys){
    console.log(key);
}