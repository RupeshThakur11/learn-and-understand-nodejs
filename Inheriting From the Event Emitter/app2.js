var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Police() {
    // === IMPORTANT ===
    // util.inherits only connects prototypes, when new Police() is called,
    // function Person() won't invoke, 
    // so officer doesn't have property 'firstname' and 'lastname'
    Person.call(this);
    
    this.badgeNumber = '12345678';
}

util.inherits(Police, Person);

var officer = new Police();
officer.greet();