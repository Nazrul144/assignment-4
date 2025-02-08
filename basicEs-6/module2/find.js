//The difference between find and array is: if array fulfill the condition it returns the matching condition with an array. 
//but if no match it provides an empty array. In terms of find it provide the only first matching elements whether it matches many 
//elements as well. if no match returns undefined.
const numbers = [20, 23, 5, 34, 21, 10, 22, 31, 11, 16, 43, 42];

const result = numbers.find(x => x>300);
console.log(result);