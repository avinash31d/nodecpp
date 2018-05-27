var ffi = require('ffi');
var ref = require('ref');
var path = require('path');

var Int = ref.types.int;

var mathNativeLib = ffi.Library(path.join(__dirname, 'math.so'),{
    'square' : [Int,[Int]]
});

var n = 10;
var nSquared = mathNativeLib.square(n);
console.log(nSquared);