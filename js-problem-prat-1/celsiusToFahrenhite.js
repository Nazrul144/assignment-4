// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius){
   let result = celsius * 1.8 + 32;
   return result;

}
let values = 2;
let result = celsiusToFahrenheit(values);

console.log(`Fahrenheit is: ${result}`);