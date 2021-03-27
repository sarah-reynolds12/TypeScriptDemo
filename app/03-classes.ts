class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }
}

let kenn: Person = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();

let phil: Person = new Person();
phil.firstName = "Phil";
phil.lastName = "Donahue";

let someVariableName: Person = new Person();

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile= new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

class Animal {

}

class bear extends Animal {

}

class Store {
    constructor(public name: string, public city: string){}
}
let ikea: Store = new Store("Ikea", "Fishers");

class Employee extends Person {
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }
    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; this breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);