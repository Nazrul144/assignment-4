// const num1 = [10, 20, 30, 50];
// const num2 = [102, 202, 302, 53];

// const result = [num1, num2];

// console.log(result);

const margeArray = (arr1, arr2) => {
    
  const margeArray = [...arr1,...arr2];
  const maxValue = Math.max(...margeArray);
    return maxValue;


}

const num1 = [10, 20, 30, 50];
const num2 = [102, 202, 302, 53];

const result = margeArray(num1, num2);
console.log(result);


