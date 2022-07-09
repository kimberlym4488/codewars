const chai = require("chai");
const { assert } = require("chai");
const findFirstDuplicate = require("../level-7/findFirstDuplicate");

describe("isDuplicate", () => {
  it("should return the first matching integers", () => {
    assert.deepEqual(findFirstDuplicate([ 2, 5, 6, 3, 5 ]), 5);
    assert.deepEqual(findFirstDuplicate([ 1, 3, 4, 1, 3, 4 ]), 1);
    assert.deepEqual(findFirstDuplicate([ 2, 4, 5 ]), undefined);
  });
});
