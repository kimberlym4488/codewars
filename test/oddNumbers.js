const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const rowSumOddNumbers = require("../level-7/oddNumbers");

describe("adding odd numbers in a row", () => {
  it("should return the sum of odd numbers in the row, and we are given the starting row number", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
