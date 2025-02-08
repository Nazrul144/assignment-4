const students = {
    2222: {
        name: "Nazrul",
        section: "A",
        class:"XI",
        address:{
            "bulding no": 12,
            "street": "ABC/12",
            "City": "Peterburg",
            "Country":"UK"
        }
    },
    3333: {
        name: "Herry",
        section: "B",
        class: "X",
        address: {
            "bluding no": "120/Ac",
            "Street": "K-12",
             "City": "Kolkata",
             "County": "India"
        }
    } 
}

console.log(students["2222"].address["City"]);
console.log(students["3333"].name);