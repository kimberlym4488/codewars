const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const invert = require("../level-8/invert");

describe("invert array", () => {
  it("should invert the array values from neg to pos and vice versa", () => {
    assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    assert.deepEqual(invert([]), []);
    assert.deepEqual(invert([0]), [-0]);
  });
});
