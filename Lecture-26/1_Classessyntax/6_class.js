class Student{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    printDetails() {
        console.log("Name:",this.name,"Age:",this.age);
    }
    //This is a getter method for the StudentName 
    //property. When you access StudentName as a property of a
    // Student object (e.g., studentInstance.StudentName), the getter method is automatically
    // invoked.
    get StudentName() {
        return this.name;
    }    

      //This is a setter method for the StudentName property. When you set StudentName as a property of a 
      //Student object (e.g., studentInstance.StudentName = "New Name"), the setter method
      //is invoked, and it assigns the new value to the name property of the Student object.
    set StudentName(name) {
        this.name=name;
    }
}
let uday=new Student("Uday",20);
let keshav=new Student("Keshav",15);

uday.printDetails();
keshav.printDetails();

// Getters and Setters are functions but we can use them as properties..
uday.StudentName = "Uday Singh";
console.log("Student Name is :",uday.StudentName)