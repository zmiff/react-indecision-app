
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age
  }
  getGreeting() {
    return `Hi i am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major; //by double flipping string will be converted to true and undefined will be converted to false
  }
  getDescription() { //override super.getDescription()
    let description = super.getDescription();

    if(this.hasMajor()){
      description += `, their major is ${this.major}`;
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homelocation){
      greeting += `, I'm visiting from ${this.homelocation}`
    }
    return greeting
  }
}

const me = new Traveler('Ugur Tamer', 34, "Århus");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
