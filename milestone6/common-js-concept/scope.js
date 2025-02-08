function sum(a,b){
    const result = a+b;
    console.log(a,b);
    if(b>25){
        const sum = 20 + a+b;
        console.log(sum);
    }else{
        var sum = 200 + a+b;
    }
    console.log(sum);
}

sum(10,20);