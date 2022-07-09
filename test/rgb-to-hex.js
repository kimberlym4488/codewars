const chai = require("chai");
const assert= chai.assert;
chai.config.truncateThreshold = 0;
const rgb = require("../level-5/rgb-to-hex");

describe("rgb", () => {
  it("should return a six character code, given three numbers between 0 and 255", () => {
    assert.equal(rgb(0, 0, 0), "000000");
    assert.equal(rgb(0, 0, -20), "000000");
    assert.equal(rgb(300, 255, 255), "FFFFFF");
    assert.equal(rgb(173, 255, 47), "ADFF2F");
  });
});
