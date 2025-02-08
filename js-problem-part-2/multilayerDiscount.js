//First 100 ---> 100 Taka
//Then 101--200--->90 Taka
//Then 201--250---> 70 Taka

function multilayeredDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity<= 100){
        const totalPrice = quantity * first100Price;
        return totalPrice;
    }
    else if(quantity<=200){    //150
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const totalResult = multilayeredDiscount(205);
console.log(totalResult);