// Node Module 'events'
var Emitter = require('events');
// prevent typo errors
var eventConfig = require('./config').events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function() {
    console.log('Someone say hello.');
});

emitter.on(eventConfig.GREET, function() {
    console.log('A greeting occured!');
})

console.log('Hello!');
emitter.emit(eventConfig.GREET);