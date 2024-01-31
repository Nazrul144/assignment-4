//Write a program about discount on a product. 
// ProductPrice:5000Tk & discount:10% on the product.

const productPrice = 4000;

if(productPrice >= 5000) {
    // give 10% discount
    const discount = productPrice * 10 /100;
    const payBill = discount - productPrice;
    console.log(discount);
    console.log('Your total bill with discount:' + payBill);
}
if(productPrice >= 4000){
    //Give discount 5%
    const discount2 = productPrice * 5 / 100 ;
    const payBill1 = discount2 - productPrice;
    console.log(payBill1);
}