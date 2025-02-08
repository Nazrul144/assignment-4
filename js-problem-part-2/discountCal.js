//If you buy product upto 100.......... pay 100 for per products.
//If you buy product upto 101......200 pay 90 for per products.
//If you buy product more than 200... pay 70 for per products.

function discount(quantity){
    if(quantity <= 100){
        const pay = quantity * 100;
        return pay;
    }
    else if(quantity <= 200){
        const pay = quantity * 90;
        return pay;
    }
    else{
        const pay = quantity * 70;
        return pay;
    }
    
}

const total = discount(201);
console.log(total);