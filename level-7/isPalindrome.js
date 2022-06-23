// Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

// function isPalindrome (string) {
// // what if I get a number. What if I get an array?
//   if (string == string.split("").reverse().join("")) {
//     return true;
//   }
//   return false;
// };

//now to do it without string methods.

//let's clean this up a bit

const isPalindrome = (string) =>
  string == string.split("").reverse().join("") ? true : false;

module.exports = isPalindrome;
