const tail= require('../tail');
const assertArraysEqual= require('../assertArraysEqual');

let  A = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(A, ["Lighthouse", "Labs"]);

// Test Case 2: Check the returned array elements
A = tail("One Element");
assertArraysEqual(A, []);

// Test Case 3: Check the returned array elements
A = tail();
assertArraysEqual(A, []);