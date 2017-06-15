var obj = {
  firstname: 'John Doe',
  greet: function() {
    console.log(`Hello ${ this.firstname }`);
  }
}

obj.greet();
obj.greet.call({firstname: 'Jane Doe'});
obj.greet.apply({firstname: 'Jane Doe'});

//call and apply let you change what the "this." keyword points to, difference between call and apply are params syntax
