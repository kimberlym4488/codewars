const chai = require("chai");
const assert = chai.assert;
const charUnique = require("../level-8/singleCharacter");

describe("find_unique", () => {
  it("Should return the first character that only appears once in a string", () => {
    assert.strictEqual(charUnique("This hat is the greatest!"), "g");
  });

  it("Should return `not a string` if given numbers or other special characters instead of letters", () => {
    assert.strictEqual(charUnique("1,2,3"), "no alpha characters included in string");
  });

  it("Should return `nothing provided` if provided an empty string", () => {
    assert.strictEqual(charUnique(""), "nothing provided");
  });
});

it("Should not be affected by character casing, given `What a wonderful`, the w is considered the same regardless of upper or lower case", () => {
  // eslint-disable-next-line prettier/prettier
  assert.strictEqual(charUnique("What a wonderful day it has been!"), "o");
});