var buf = new Buffer('Hello', 'utf8');
//utf8 is default encoding, duh.

console.log(buf);

console.log(buf.toString());

console.log(buf.toJSON());

console.log(buf[2]);

buf.write('wo');

console.log(buf.toString());
