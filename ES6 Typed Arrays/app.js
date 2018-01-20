var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 10;
view[1] = 15;
console.log(view);
