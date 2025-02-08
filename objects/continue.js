let numbers = [10, 20, 30, 40, 50, 60, 70];

for(let item of numbers){
    if(item === 30){
        continue;
    }
    console.log(item);
}