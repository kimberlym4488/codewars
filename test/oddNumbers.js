const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;


describe("Add only odd numbers", () => {
  it("should return the sum of odd numbers given a starting row number", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
