const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKey",()=>{

  
  it('Test Case 1"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire" };
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected ="drama";
    assert.deepEqual(result, expected);
  });

  it('Test Case 2"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire" };
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected =undefined;
    assert.deepEqual(result, expected);
  });

});
