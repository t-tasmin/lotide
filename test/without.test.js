const assert = require('chai').assert;
const without = require('../without');

describe("#without",()=>{

  it('Test Case 1"', () => {
    const result = without([1, 2, 3], [1]);
    const expected = [2,3];
    assert.deepEqual(result, expected);
  });

  it('Test Case 2"', () => {
    const words = ["hello", "world", "lighthouse"];
    const result = without(words, ["lighthouse"]);
    const expected = ["hello", "world"];
    assert.deepEqual(result, expected);
  });

});
