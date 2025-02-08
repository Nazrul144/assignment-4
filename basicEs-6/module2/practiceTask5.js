const instructor = [
    {
        name: "Jahid",
        age: 40,
        position: "Senior"
    },

    {
        name: "Abul",
        age: 50,
        position: "Junior"
    },

    {
        name: "Jahid",
        age: 45,
        position: "Senior"
    },

]

const result = instructor.filter(p => p.position == ["Senior"]);
console.log(result);