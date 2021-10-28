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



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}`);
  }
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false