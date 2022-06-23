const chai = require("chai");
const { assert } = require("chai");
const isTriangle = require("../level-7/isTriangle");

describe("isTriangle", () => {
  it("should return true if a number is a triangle", () => {
    assert.strictEqual(isTriangle(1, 2, 2), true);
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});
