var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
  this.badgenumber = '134541';
  Person.call(this);
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
