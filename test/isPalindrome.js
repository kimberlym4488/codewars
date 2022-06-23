const chai = require("chai");
const { assert } = require("chai");
const isPalindrome = require("../level-7/isPalindrome");

describe("isPalindrome", () => {
  it("should return true if a reversed word is the same as the word provided", () => {
    assert.deepEqual(isPalindrome("hello"), false);
    assert.deepEqual(isPalindrome("yay"), true);
  });
});
