function person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

var john = new person('John', 'Doe');

console.log(john.firstname);
console.log(john.lastname);


person.prototype.greet = function(){
  console.log('Hello, ' + this.firstname + ' '  + this.lastname);
}

john.greet();

var jane = new person('jane', 'doe');

jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
