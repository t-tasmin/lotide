const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🥵😱🥵😱Assertion Failed:${actual} !== ${expected}`);
  }
};

const head=function(A){
  if (Array.isArray(A))
  return A[0];
  else{
  return A;}
}

assertEqual(head(5), 5);
assertEqual(head([3,5,4]), 5);



