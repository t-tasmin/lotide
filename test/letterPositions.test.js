const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions",()=>{

  it('Test Case 1"', () => {
    const result = letterPositions("hello molly").l;
    const expected = [2,3,8,9];
    assert.deepEqual(result, expected);
  });

});
