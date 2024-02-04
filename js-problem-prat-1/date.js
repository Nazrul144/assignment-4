const today = new Date(2020, 0, 2);
console.log(today);
today.setMonth(10);
console.log(today.toLocaleDateString('en-GB'));