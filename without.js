const assertArraysEqual = function(A, B) {
  let b = true;

  if (A.length !== B.length) {
    b = false;
  } else {

    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i])     {
        b = false;
        break;
      }
    }
  }

  if (b === true) {
    console.log(`✔✔✔Assertion Passed:${A} === ${B}`);
  } else {
    console.log(`🥵😱🥵😱Assertion Failed:${A} !== ${B}`);
  }
};


const without = function(A,B) {
  let C = A.slice(0);

  for (let i = 0; i < B.length; i++) {
    let index = C.indexOf(B[i]);
    if (index !== -1) {
      C.splice(index, 1);
    }
  }
  return C;
};

// Test case for checking without function
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]),["hello", "world"]); // no need to capture return value for this test case


// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
