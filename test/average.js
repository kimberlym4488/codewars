const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const find_average = require("../level-8/average");

describe("find_average", () => {
  it("Should return the average of all the array items, given numbers", () => {
    assert.strictEqual(find_average([1, 1, 1]), 1);
    assert.strictEqual(find_average([1, 2, 3]), 2);
    assert.strictEqual(find_average([1, 2, 3, 4]), 2.5);
  });
});
