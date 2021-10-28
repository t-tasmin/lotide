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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (object1[key].length > 1) {
        if (eqArrays(object1[key] , object2[key]) === false) {
          return false;
        }
      }  else if (object1[key] !== object2[key]) {
        return false;
      }
    }//for loop
  }
  return true;
};


const assertObjectsEqual = function(A, B) {
  const inspect = require('util').inspect;
  if (eqObjects(A,B) === true) {
    console.log(`✔✔✔Assertion Passed:${inspect(A)} === ${inspect(B)}`);
  } else {
    console.log(`❌❌❌Assertion Failed:${inspect(A)} !== ${inspect(B)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);