//Compare three person's score and find our the height score of them.




function compare(nazrul, joy, maruf){
    if(nazrul > joy && nazrul > maruf){
        console.log("Nazrul is the ultimate boss!");
    }
    else if(joy> nazrul && joy> maruf){
        console.log("Joy is the ultimate boss");
    }
    else{
        console.log("Marfu is the ultimate of the unit");
    }
    
}

let nazrul = 100;
let joy = 104;
let maruf = 103;
compare( nazrul, joy, maruf);