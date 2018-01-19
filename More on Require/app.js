// if require can't find greet.js file,
// it'll search for folder called greet and process index.js file in that folder.
var greet = require('./greet');

greet.en();
greet.zh_tw();