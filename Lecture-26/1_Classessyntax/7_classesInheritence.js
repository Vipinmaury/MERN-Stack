// Syntactical Sugar Syntax
class Vehicle{
    constructor(company){
        this.company = company;
    }
}

// Car tab tak create nahi ho skti jab tak Vehicle na create
// ho jaaye
// In JavaScript, the extends keyword is used in classes to create a 
// subclass that inherits from a parent class. When a subclass extends a parent class,
//  it inherits all the properties and methods of the parent class, and
//   it can also add its own properties and methods.
class Car extends Vehicle{
    constructor(company, name, price) {
        super(company);
        this.name = name;
        this.price = price;
    }
}

class Suv extends Car{
    constructor(company,name,price,type){  
        super(company,name,price);
        this.type = type;
    }
}

let maruti = new Car("Maruti","Lord Alto",100);
console.log(maruti);

let creta = new Suv("hyundia","Creta",50,"Suv");
console.log(creta);