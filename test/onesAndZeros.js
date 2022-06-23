describe("One's and Zero's", () => {
  it("should convert the string of ones and zeros into the binary number", () => {
    Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
    Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
    Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
    Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);
  });
});
