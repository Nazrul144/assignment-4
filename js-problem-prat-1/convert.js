//Convert a person height with feet and inch by a function.

function feetInch(inch){
    const feet = inch/12;
    const feetNumber = parseInt(feet);
    const remainingNumber = inch % 12;
    const result = `${feetNumber} Feet ${remainingNumber} inch.`;
    return result;
}

const received = feetInch(75);
console.log(received);