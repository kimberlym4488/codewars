const chai = require("chai");
const assert = chai.assert;
const hero = require("../level-8/bullets");
chai.config.truncateThreshold = 0;

describe("hero", function () {
  it("should return false if you don't have enough bullets for the dragons.", () => {
    assert.strictEqual(hero(10, 5), true);
    assert.strictEqual(hero(7, 4), false);
    assert.strictEqual(hero(4, 5), false);
    assert.strictEqual(hero(100, 40), true);
    assert.strictEqual(hero(1500, 751), false);
    assert.strictEqual(hero(0, 1), false);
  });
});
