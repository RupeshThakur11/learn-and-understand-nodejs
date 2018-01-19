var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3a = require('./greet3');
greet3a.greet();
greet3a.greeting = 'Hello world!![Changed]';

var greet3b = require('./greet3');
greet3b.greet();

console.log(greet3a === greet3b); // true
// 若一個 module.exports 的是一個物件，當它第一次被 require 時，會被暫存著。
// 當下一次再被 require 時，會直接回傳暫存的資料與記憶體位址。
// require 同一個檔案再多次也只有第一次會執行。

var Greet4 = require('./greet4');
var greet4a = new Greet4();
greet4a.greet();

var greet4b = new Greet4();
greet4b.greet();

console.log(greet4a === greet4b); // true

var greet5 = require('./greet5').greet;
greet5();
