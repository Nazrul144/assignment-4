const people = [
    {
        name:"Meena",
        age: 20
    },
    
    {
        name:"Rina",
        age: 15
    },

    {
        name:"Bina",
        age: 22
    }
]

let sum = 0;
for(const num of people){
    sum = sum + num.age;
}
console.log(sum)

// Using reducing method:

const sum = people.reduce((x,y) => x + y.age,0);
console.log(sum);