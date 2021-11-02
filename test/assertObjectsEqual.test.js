const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');


describe("#assertObjectsEqual",()=>{

  it("Test Case 1", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assertObjectsEqual(ab, ba);
  });

  it("Test Case 2", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assertObjectsEqual(ab, abc);
  });

  it("Test Case 3", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assertObjectsEqual(cd, dc);
  });

});

