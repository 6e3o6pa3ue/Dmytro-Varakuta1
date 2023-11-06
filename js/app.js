// Dima Varakuta//
const myCar = [];

class TopCar{
    constructor(model, mark, country, speed){
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
    increaseSpeed(value){
        this.speed += value;
    }
    decreaseSpeed(value){
        this.speed -= value; 
    }
}

class Truck extends  TopCar{
    constructor(model, mark, country, speed) {
     super(model, mark, country, speed);
    }
    takeWeight(weight){
        console.log(`${this.mark} ${this.model} take ${weight} kg.`);
    }
}

class Bus extends  TopCar{
    constructor(model, mark, country, speed) {
     super(model, mark, country, speed);
    }
    takePeople(people){
        console.log(`${this.mark} ${this.model} take ${people} people.`);
    }
}
//Вариант 2//
class Transporter extends  TopCar{
    constructor(model, mark, country, speed){
     super(model, mark, country, speed);
    }
    takeCars(cars){
    const infoCarthree = `Transporter ${this.mark} ${this.model} take ${cars} cars`;
    myCar.push(transporter);
    myCar.push(infoCarthree);
    }
}

const truck = new Truck('MAN', 'ZAZ', 'Ukraine', 75);
truck.takeWeight(5000);
truck.increaseSpeed(10);

const bus = new Bus('Mercedes', 'Vito', 'Poland', 120);
bus.takePeople(10);
bus.increaseSpeed(10);

const transporter = new Transporter('Fiat', 'Todgers', 'USA', 100);
transporter.takeCars(5);
transporter.decreaseSpeed(15);

console.log(myCar);
