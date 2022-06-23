describe("longest", function () {
  it("should return a combination of unique letters from two different strings", function () {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    Test.assertEquals(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    );
    Test.assertEquals(
      longest("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    );
  });
});
