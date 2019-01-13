var nameVar = 'Andrew';
nameVar = 'Mike'
console.log('nameVar ', nameVar)

let nameLet = 'Jeff';
nameLet = 'Jen';
console.log('nameLet ', nameLet)

const nameConst = 'Birger';
console.log('nameConst ', nameConst)

// Block scoping

const fullName = 'Ugur Tamer';
let firstName;

if(fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName)
