/**
 * Chair........> 3 cft
 * Table.........>10 cft
 * Bed ...........> 50 cft
 */

function calculationCalculator(chairQuantity, tableQuantity, bedQuantity){

    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const totalChairWood = chairWood * chairQuantity;
    const totalTableWood = tableWood * tableQuantity;
    const totalBedWood = bedWood * bedQuantity;

    const totalWoodNeeded = totalChairWood + totalTableWood + totalBedWood;

    return totalWoodNeeded;

}

const result = calculationCalculator(12, 2, 0);
console.log(result);