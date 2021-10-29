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

const takeUntil = function(array, callback) {
  let A = [];

  for (let i=0; i<array.length; i++){
    
    if (callback(array[i]) === true)
    { break;}
    else
    {A.push(array[i]);}

  }
  return A;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);
