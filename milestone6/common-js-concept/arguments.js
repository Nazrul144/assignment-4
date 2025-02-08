function sum(a,b,c){
    const arrg = [...arguments];
    console.log(arrg);
    const result = a+b+c;
    console.log(result);
}

sum(10,20,30,10,33,44,11);