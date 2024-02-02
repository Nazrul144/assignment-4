let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let item of numbers){
    if(item === 50){
        continue;
    }
    console.log(item);
}