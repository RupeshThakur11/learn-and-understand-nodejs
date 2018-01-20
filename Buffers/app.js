// Buffer is global.
var buffer = Buffer.from('Hello', 'utf8'); // utf-8 : default encoding type

console.log(buffer);
console.log(buffer.toString()); // hello
console.log(buffer.toJSON());

buffer.write('wo');
console.log(buffer.toString()); // wollo
// 'wo' replaced 'he' in 'hello', cause buffer is a finite piece of data.