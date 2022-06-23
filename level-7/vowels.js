// function getCount(str) {
//   // taking in a string of lowercase letters or spaces
//   let array = str.split("");
//   // filter out the vowels and then count them
//   let vowels = ["a", "e", "i", "o", "u"];

//   let count = 0;
//   // I could map over the string and add the vowels to a counter
//   array.map(function (element) {
//     if (vowels.includes(element)) {
//       count++;
//     }
//   });
//   // returning a number, the count of vowels.
//   return count;
// }

const getCount = (str) => {
  // taking in a string of lowercase letters or spaces
  // declare the vowels we are targeting
  let vowels = ["a", "e", "i", "o", "u"];
  // filter out the vowels from the string array.
  let array = str.split("");
  // declare a count variable for anything returning true here.
  let vowelCount = array.filter((element) => vowels.includes(element));
  // returning a number, the count of vowels.
  return vowelCount.length;
};

module.exports = getCount;
