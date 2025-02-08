//Print the secondary school Sofia's location from following object:

let data = {
    sofia: {
        id:33,
        study: [
            {
                primary:[
                    {school_name: "ABC Primary school"},
                    {location: "Peter burg"},
                 ]
            },
            {
                secondary: [
                    {school_name:"ABC Secondary school"},
                    {location:"St lorence"},
                ]
            }

        ]
    }
}

console.log(data.sofia.study[1].secondary[1].location);
