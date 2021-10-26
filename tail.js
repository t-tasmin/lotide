const assertEqual = function(actual, expected) {
  let b = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])     {
      b = false;
      break;
    }
  }
  if (b === true) {
    console.log(`✔✔✔Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🥵😱🥵😱Assertion Failed:${actual} !== ${expected}`);
  }
};


const tail = function(A) {
  if (Array.isArray(A))  {
    return A.slice(1);
  } else   {
    return [];
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
let  result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

// Test Case 2: Check the returned array elements
result = tail("One Element");
assertEqual(result, []);

// Test Case 3: Check the returned array elements
result = tail();
assertEqual(result, []);