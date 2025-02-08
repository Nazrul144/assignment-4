function greeting(grettingHandler, name){
    grettingHandler(name);
}

function grettingHandler(nameReceived){
    console.log("Good Morning!", nameReceived)
}

function greatEvening(name){
    console.log("Good Evening", name)
}

greeting(grettingHandler, "Nazrul");
greeting(grettingHandler, "Maruf");
greeting(grettingHandler, "Baby");
greeting(greatEvening,'Mazan');