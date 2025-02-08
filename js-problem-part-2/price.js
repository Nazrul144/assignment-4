//Shirt price: 500.
//Pant price: 300.
//Shoe price: 900.


function priceCalculation(shirtQuantity, pantQuantity, shoeQuantity){
    
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirtPrice = shirtPrice * shirtQuantity;
    const totalPantPrice = pantPrice * pantQuantity;
    const totalShoePrice = shoePrice * shoeQuantity;

    const totalPriceNeeded = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPriceNeeded;

}

const totalMoney = priceCalculation(2, 5, 2);

console.log(totalMoney);