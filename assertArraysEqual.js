const eqArrays = require('./eqArrays');

const assertArraysEqual = function(A, B) {
  if (eqArrays(A,B) === true) {
    console.log(`✔✔✔Assertion Passed:${A} === ${B}`);
  } else {
    console.log(`❌❌❌Assertion Failed:${A} !== ${B}`);
  }
};


module.exports= assertArraysEqual;