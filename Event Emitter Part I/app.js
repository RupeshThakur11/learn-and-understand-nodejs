var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function() {
    console.log('Someone say hello.');
});

emitter.on('greet', function() {
    console.log('A greeting occured!');
})

console.log('Hello!');
emitter.emit('greet');