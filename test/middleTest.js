const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays')
const middle = require('../middle');

console.log (eqArrays (middle([0, 5, 10, 9, 8, 7, 10]),[9]));
console.log (assertArraysEqual (middle([0, 5, 10, 9, 8, 7, 10]), [9]));