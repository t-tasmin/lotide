const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle",()=>{

  it('should return 3 for [1, 2, 3, 4, 5])', () => {
    const result = middle([1, 2, 3, 4, 5]);
    const expected = 3;
    assert.deepEqual(result, expected);
  });


  it('should return [3,4] for [1, 2, 3, 4, 5,6])', () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3,4];
    assert.deepEqual(result, expected);
  });

  it('should return [30, 4] for [10, 2, 30, 4, 9 ,6])', () => {
    const result = middle([10, 2, 30, 4, 9 ,6]);
    const expected = [30, 4];
    assert.deepEqual(result, expected);
  });

  it('should return [] for [10, 2])', () => {
    const result = middle([10, 2]);
    const expected = [];
    assert.deepEqual(result, expected);
  });
});

