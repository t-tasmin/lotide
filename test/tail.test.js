const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail",()=>{

  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(result, expected);
  });

  it('should return [2,3,4] for [1,2,3,4]', () => {
    const result = tail([1,2,3,4]);
    const expected = [2,3,4];
    assert.deepEqual(result, expected);
  });

  it('should return [ ] for ["One element"]', () => {
    const result = tail(["One element"]);
    const expected = [];
    assert.deepEqual(result, expected);
  });

  it('should return [ ] for undefined input', () => {
    const result = tail();
    const expected = [];
    assert.deepEqual(result, expected);
  });
});

