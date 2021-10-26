const eqArrays = function(A, B) {
  
  let b = true;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i])     {
      b = false;
      break;
    }
  }
  return b;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🥵😱🥵😱Assertion Failed:${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true);