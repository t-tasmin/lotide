const eqArrays = function(A, B) {
  if (A.length !== B.length) {
    return false;
  } else {
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i])     {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(A, B) {
  if (eqArrays(A,B) === true) {
    console.log(`✔✔✔Assertion Passed:${A} === ${B}`);
  } else {
    console.log(`❌❌❌Assertion Failed:${A} !== ${B}`);
  }
};


const middle = function(A) {
  console.log(A);
  if (A.length < 3) {
    return [];
  } else if (A.length % 2 === 1) {
    return A[(A.length - 1) / 2];
  } else if (A.length % 2 === 0) {
    let B = [A[A.length / 2 - 1] , A[A.length / 2]];
    return B;
  }
};

//Test Code
assertArraysEqual(middle([1, 2, 3, 4, 5]), 3);
assertArraysEqual(middle([1, 2, 3, 4, 5 ,6]), [3, 4]);
assertArraysEqual(middle([10, 2, 30, 4, 9 ,6]), [30, 4]);
assertArraysEqual(middle([0, 2, 3, -5, 9 ,6, 8]), -5);
assertArraysEqual(middle([2,9]), []);
