const { assert } = require("chai");
const getCount = require("../level-7/vowels");

describe("vowel-test", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
});
