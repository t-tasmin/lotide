const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4, 5]), 3);
assertArraysEqual(middle([1, 2, 3, 4, 5 ,6]), [3, 4]);
assertArraysEqual(middle([10, 2, 30, 4, 9 ,6]), [30, 4]);
assertArraysEqual(middle([0, 2, 3, -5, 9 ,6, 8]), -5);
assertArraysEqual(middle([2,9]), []);
