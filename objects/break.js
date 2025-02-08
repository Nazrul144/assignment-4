let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumOdd = 0; 
sumEven = 0; 
for(let item of numbers){
    if(item%2===0){
        sumEven = sumEven+item;
    }else{
        sumOdd = sumOdd+item;
    }
}
console.log(sumEven);
console.log(sumOdd);
