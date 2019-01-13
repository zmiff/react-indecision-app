// arguements object - no longer bound with arrow funcionts

const add = (a,b) => {
  // console.log(arguments)
  return a+b;
};
console.log(add(55,1));


// this keyword - no longer bound

const user = {
  name: 'Ugur',
  cities:['Viby','Hasselager','Hasle'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}

console.log(user.printPlacesLived())


// challenge

const multiplier = {
  numbers: [3, 6, 9],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply());
