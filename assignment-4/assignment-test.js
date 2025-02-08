
function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return "Invalid Number"
    }
    const ticketPrice = 120;
    const janitorFee = 500;
    const staffNumber = 8;
    const perStaffCost = 50;


    const TotalTicketPrice = ticketSale * ticketPrice;
    const totalSpent = janitorFee + (staffNumber * perStaffCost);
    const result = TotalTicketPrice - totalSpent;
    return result;
}

let result = calculateMoney(-130 );
console.log(result);








// function checkName(name) {
//     if(typeof name !== 'string'){
//         return "invalid";
//     }
// let lastLatter = name.slice(-1);
// if(lastLatter.toLowerCase() === 'a' || lastLatter.toLowerCase() === 'y' || lastLatter.toLowerCase() === 'i' || 
// lastLatter.toLowerCase() === 'e' || lastLatter.toLowerCase() === 'o' || lastLatter.toLowerCase() === 'u' || 
// lastLatter.toLowerCase() === 'w'){
//     return "Good Name";
// }
// else{
//     return "Bad Name";
// }
//     }

 





// function deleteInvalids(array) {
//     if(!Array.isArray(array)){
//         return "Invalid Array";
//     }
//     else{
//         let newArray = [];
//         for(let item of array){
//             if( typeof item === 'number' && !isNaN(item)){
//                 newArray.push(item);
//             }
//         }
//          return newArray;
//     }
//  }







// function password(obj) {
//     if(!obj.name || !obj.birthYear || !obj.siteName){
//         return "invalid";
//     }
//     else if(obj.birthYear.toString().length !== 4){
//         return "invalid";
//     }
//     const passwordStructure = obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1).concat('#').concat(obj.name).concat('@').concat(obj.birthYear);
//     return passwordStructure;
// }








function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return `invalid input`;
    }
    let sum = 0;
    for (let item of arr) {
        let totalRemaining = item;

        if (item >= 3000) {
            let discount = (item * 20) / 100;
            totalRemaining = totalRemaining - discount;
        }

        sum = sum + totalRemaining;
    }

    const savingMoney = sum - livingCost;
    if(savingMoney >= 0){
        return savingMoney;
    }
    else if(savingMoney < 0){
        return "earn more"
    }  
}































