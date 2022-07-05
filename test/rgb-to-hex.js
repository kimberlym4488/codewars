const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const rgb = require("../level-5/rgb-to-hex");

describe("Tests", () => {
    it("Basic Tests", () => {
      Test.assertEquals(rgb(0, 0, 0), '000000')
      Test.assertEquals(rgb(0, 0, -20), '000000')
      Test.assertEquals(rgb(300,255,255), 'FFFFFF')
      Test.assertEquals(rgb(173,255,47), 'ADFF2F')
    });
  });
  