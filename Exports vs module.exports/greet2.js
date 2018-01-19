// to prevent breaking the reference,
// you could mutate exports.
// mutate: add a method or property to object, means changing the object.
exports.greet = function() {
    console.log('hello');
}

console.log(exports);
console.log(module.exports);