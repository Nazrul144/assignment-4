//JavaScript Object Notation (JSON).

const person = {
    name: "Nazrul Islam",
    id: 211002144,
    section: "211-D1"
}


const stringfied = JSON.stringify(person);
console.log(stringfied);

const stringObj = JSON.parse(stringfied);
console.log(stringObj);