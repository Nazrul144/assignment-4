class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    nazrul(){
        console.log(`Nazrul is learning web programming ${this.name}`);
    }
}

const result = new Person("Nazrul", 23);
console.log(result);
result.nazrul();