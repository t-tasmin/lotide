const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil",()=>{

  it('Test Case 1"', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data1, x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(result, expected);
  });

  it('Test Case 2"', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data2, x => x === ',');
    const expected = ["I've", "been", "to", "Hollywood"];
    assert.deepEqual(result, expected);
  });
});
