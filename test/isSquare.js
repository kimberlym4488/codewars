const chai = require("chai");
const assert = chai.assert;
const isSquare = require("../level-7/isSquare");

describe("isSquare", function () {
  it("should return true if a number is a perfect square", function () {
    assert.deepEqual(
      isSquare(-1),
      false,
      "-1: Negative numbers cannot be square numbers"
    );
    assert.deepEqual(isSquare(0), true, "0 is a square number (0 * 0)");
    assert.deepEqual(isSquare(3), false, "3 is not a square number");
    assert.deepEqual(isSquare(4), true, "4 is a square number (2 * 2)");
    assert.deepEqual(isSquare(25), true, "25 is a square number (5 * 5)");
    assert.deepEqual(isSquare(26), false, "26 is not a square number");
  });
});
