var obj = {
  greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

var arr = [];

arr.push(function() {
  console.log('Hello World 1');
});

arr.push(function() {
  console.log('Hello World 2');
});

arr.push(function() {
  console.log('Hello World 3');
});

console.log(arr);

arr.forEach(function(item) {
  item();
});
