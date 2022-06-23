const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const longest = require("../level-7/twoToOne");

describe("longest", function () {
  it("should return a combination of unique letters from two different strings", function () {
    assert.equal(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    assert.equal(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    );
    assert.equal(
      longest("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    );
  });
});
