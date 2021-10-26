const assertArraysEqual = function(A, B) {
  let b = true;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i])     {
      b = false;
      break;
    }
  }
  if (b === true) {
    console.log(`✔✔✔Assertion Passed:${A} === ${B}`);
  } else {
    console.log(`🥵😱🥵😱Assertion Failed:${A} !== ${B}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [2, 1, 3]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);