const binaryArrayToNumber = (arr) => {
  // your code

  //lets declare each position in the array next to it's multiplier then map over each array item to that corresponding multiplier
  let biggest = 128;
  //if array is less than 8 we need to add beginning zero's to make the full binary number. This is because the directions stated the length could be 4 or more. But the max binary number is 8.
  if (arr.length < 8) {
    //this doesn't take us to O(n) because the max array length is 8.
    for (let i = arr.length; i < 8; i++) {
      arr.unshift(0);
    }
  }

  //this is really not an elegant way to accomplish this, but given the max work is 8 items, it makes sense so I can move on with my life.
  return (
    arr[0] * biggest +
    (arr[1] * biggest) / 2 +
    (arr[2] * biggest) / 4 +
    (arr[3] * biggest) / 8 +
    (arr[4] * biggest) / 16 +
    (arr[5] * biggest) / 32 +
    (arr[6] * biggest) / 64 +
    arr[7]
  );
};

module.exports = binaryArrayToNumber;
