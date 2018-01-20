var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// returns a Buffer
var greet2 = fs.readFile(__dirname + '/greet.txt', function(err, data) {
  console.log(data);
});

// returns a String
var greet3 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log('Done!');
