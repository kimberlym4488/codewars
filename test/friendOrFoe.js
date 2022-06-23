const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const friend = require("../level-7/friendOrFoe");

describe("friend", () => {
  it("should only keep friends in the list with 4 letters in their name", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), [
      "Ryan",
    ]);
    assert.deepEqual(
      friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
      ["Jimm", "Cari", "aret"]
    );
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), [
      "Love",
      "Your",
      "Face",
    ]);
  });
});
