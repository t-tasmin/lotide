const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly",()=>{

  it('Test Case 1"', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expected = { "Jason": 1, "Fang": 2 };
    assert.deepEqual(result, expected);
  });

});
