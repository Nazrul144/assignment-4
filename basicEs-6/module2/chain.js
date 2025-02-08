// Access data:

const person = [{name: 'Abul', age:20, address: 'Kochu Khet', phone: "01713214214"},
{name: 'Mokles', age: 50, address: 'Dhaka', status: 'Maried'},
{name: "Rayhan",address: 'Barisal', phone:203243243, isMarried: false}];


console.log(person[2].isMarried);


const product = {
    name: "Car",
    color: 'Rad',
    price: 12000000,
    data:[
        {id: 1234, name:'abc', address: 'white-house', time:'12'},
        {id: 324, name:'def', address: 'black-house', time:'14'},
    ]
}

console.log(product.data[1].name);

const person = {
    name: 'Nazrul Islam',
    id: 211002144,
    address: ["Dhaka","Barisal"],
    university: {
        course: ["Web programming", "Data Structure", "Algorithm", "Software Engineering"],
        teacher:{
            name: "Monir",
            id: 211,
            isMarried: true,
            mam:{
                name: "Wasia",
                id: 211,
                isMarried: false,
                course: "Artificial Intelligence"
            }
        }
    }
}


console.log(person.university.teacher.mam.course);


//Optional chain:

const person = {
    name: "Nazrul Islam", 
    id: 21100,
    isMarried: false,
    address: "Dhaka",
}

const teacher = {
    name: "Monir",
    id: 1234,
    isMarried: true,
    address:{
        city: "Dhaka",
        country: "Bangladesh",
        course:["Math","Novel","English"]
    }
}

console.log(person.address.course?.love);
console.log(teacher.address.course);
