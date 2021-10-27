
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


const countLetters = function(S) {
  const results = {};
  let A=[];

  for (let i = 0; i < S.length; i++) {

    let key = S[i];
    if (key !== " ") {
      if (key in results) {
        results[key].push(i);
      } else {
        results[key]=[i];
      }
    }
  }
  return results;
};


assertArraysEqual(countLetters("hello molly").l, [2,3,8,9]);