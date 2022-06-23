const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const binaryArrayToNumber = require("../level-7/onesAndZeros.js");

describe("One's and Zero's", () => {
  it("should convert the string of ones and zeros into the binary number", () => {
    assert.strictEqual(binaryArrayToNumber([0, 0, 0, 1]), 1);
    assert.strictEqual(binaryArrayToNumber([0, 0, 1, 0]), 2);
    assert.strictEqual(binaryArrayToNumber([1, 1, 1, 1]), 15);
    assert.strictEqual(binaryArrayToNumber([0, 1, 1, 0]), 6);
  });
});
