var obj = {
    name: 'John Doe',
    greet: function(param1, param2) {
        console.log(`Hello ${ this.name }`);
        if(param1) console.log(param1);
        if(param2) console.log(param2);
    }
}

obj.greet();

// parameter passed into .call() or .apply() will become 'this' in greet function.
// they let's you borrow methods.
obj.greet.call({ name: 'Jane Doe' }, 'param1', 'param2');
obj.greet.apply({ name: 'Jane Doe' }, ['param1', 'param2']);

// Difference between .call() and .apply() :
// .call()  -> pass parameters as a comma separated list.
// .apply() -> pass parameters in an array.