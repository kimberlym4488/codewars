const chai = require("chai");
const assert = chai.assert;
const createPhoneNumber = require("../level-6/create-phone-number");

describe("createPhoneNumber", function () {
  it("should create a standard phone number format of (xxx)xxx-xxxx when given 10 numbers. ", function () {
    assert.equal(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]), "(123) 456-7890");
  });
});
