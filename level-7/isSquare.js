var isSquare = function (n) {
  // if n is 0 it will return true because 0 is a square number. But the sqrt of 0 will give me an error.
  if (n === 0) {
    return true;
  }
  // if n is negative, we need to automatically return a false.
  else if (n < 0) {
    return false;
  }
  // now, if the square root is a whole number (i.e. 25, sqrt is 5) then I want to return true. T
  else {
    // to check if it is a square number we can multiply it times 10 and then do a modulo of 10 (divide it by 10)
    // if the remainder is zero, we know it had no decimals on the end.
    // i.e. 1.72645 * 10 = 17.2645 / 10 = modulo of .72645
    // 5 * 10 = 50 / 10  = modulo of 0
    return (Math.sqrt(n) * 10) % 10 === 0 ? true : false;
  }
};

module.exports = isSquare;
