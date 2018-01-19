'use strict';

var EventEmitter = require('events');
/*  
    function Greetr() {
        EventEmitter.call(this);
        this.greeting = 'Hello world!';
    }

    util.inherits(Greetr, EventEmitter);
*/

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet', data);
    }
}