// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  // I am given an index starting at 1. The next row is 2 = 8, then 3 = 27
  //1st row 1, 2nd row 3, 3rd row 7, 4th row 13, 5th row 21
  //starting value for row 5 is 5*4=20, +1 = 21
  return (n * (n - 1) + 1) * n + n * (n - 1);
  // Start with 31.31*6 = 186
  //   End with 31+33+35+37+39+41 or 216
  //   2+4+6+8+10 = 30 (n-1*n)
  //  (startingValue*n)+(n*n-1)
}

//Just looked at the solved solution. its n** (n cubed. I'm not crying, you're crying)
module.exports = rowSumOddNumbers;
