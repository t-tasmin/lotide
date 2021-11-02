const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey",()=>{

  it('Test Case 1"', () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);

    const expected ="noma";
    assert.deepEqual(result, expected);
  });

  it('Test Case 2"', () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 5);

    const expected ="undefined";
    assert.deepEqual(result, expected);
  });
  

});
