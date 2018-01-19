// Though module.exports and exports were pass by reference,
// if you use equal('=') in javascript, it breaks the reference,
// now, exports is pointed to a new memory location.
exports = function() {
    console.log('greet');
}

console.log(exports);
console.log(module.exports);