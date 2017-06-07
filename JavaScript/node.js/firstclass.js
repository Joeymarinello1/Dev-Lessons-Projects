//first class fucntions, baby.

function greet() {
  console.log('here comes, THE MAN');
}

function logGreeting (fn) {
  fn();
}

logGreeting(greet);

var greetMe = function() {
  console.log('hi, how are you?')
}

greetMe();
