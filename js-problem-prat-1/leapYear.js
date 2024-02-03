//Find out the leap year from the year.

//Note1: Those year is not divisible by 100 and if the year is divisible by 4 then we can say it's leap year.
//Note2: If the year is divisible by 100 and 400 then we can say it's leap year.
//Note3: Otherwise it's not a leap year.

// Now let's solve it step by step.

function leapYear(year){
    if(year % 100 !== 0 && year % 4 ===0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const lipi1 = leapYear(2100);
const lipi2 = leapYear(2400);
const lipi3 = leapYear(1900);
const lipi4 = leapYear(2052);
const lipi5 = leapYear(2000);

console.log(lipi1, lipi2, lipi3, lipi4, lipi5);