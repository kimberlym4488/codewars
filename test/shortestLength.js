const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const findShort = require("../level-7/shortestLength");

describe("shortest length", () => {
  it("should return the index value of the first shortest word in a sentence", () => {
    assert.strictEqual(
      findShort("bitcoin take over the world maybe who knows perhaps"),
      3
    );
    assert.strictEqual(
      findShort(
        "turns out random test cases are easier than writing out basic ones"
      ),
      3
    );
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  });
});
