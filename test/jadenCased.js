const chai = require("chai");
const assert = chai.assert;
const toJadenCase = require("../level-7/jadenCased.js");

describe("toJadenCase", () => {
  it("should return every item in a string statement with the first letter uppercased", () => {
    var str = "How can mirrors be real if our eyes aren't real";
    assert.deepEqual(
      toJadenCase(str),
      "How Can Mirrors Be Real If Our Eyes Aren't Real"
    );
  });
});
