//First 100 ---> 100 Taka
//Then 101--200--->90 Taka
//Then 201--250---> 70 Taka

function discount(quantity){

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const first100Total = quantity * first100Price;
        return first100Total;
    }
    else if(quantity <=200){
        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Price + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const totalResult = discount(250);
console.log(totalResult);