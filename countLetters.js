const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}`);
  }
};

const countLetters = function(S) {
  const results = {};

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== " ") {
      if (S[i] in results) {
        results[S[i]] += 1;
      } else {
        results[S[i]] = 1;
      }
    }
  }
  return results;
};


console.log(countLetters("lighthouse in the house"));