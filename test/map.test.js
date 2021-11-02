const assert = require('chai').assert;
const map = require('../map');

describe("#map",()=>{

  it('Test Case 1"', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, word => word[0]);
    const expected = ['g','c','t','m','t'];
    assert.deepEqual(result, expected);
  });

});