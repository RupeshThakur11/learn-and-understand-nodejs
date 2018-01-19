'use strict';

// Class is just syntactic sugar of prototype-based inheritance, 
// not like other languages classes.

// Syntactic Sugar: A feature that only changed how you type someting,
// but nothing changes under the hood.
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Doe');

john.greet();
jane.greet();

console.log(john.__proto__ === jane.__proto__);