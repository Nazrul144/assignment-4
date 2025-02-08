class Vahecale {
    constructor(name, price){
        this.name;
        this.price;
    }
    move(){
        console.log("The car is running on the road.");
    }
}

class Bus extends Vahecale {
    constructor(name, price, seat, ticketPrice){
        super(name,price)
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vahecale{
    constructor(name, price, load, color){
        super(name, price);
        this.load = load;
        this.color = color;
    }
}