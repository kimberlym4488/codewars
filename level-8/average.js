// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const find_average = (array) =>
  // conditional, if array has more than one item I sum them and divide by how many items are in array.
  // let's refactor this to return early if nothing or one item.
  !array.length
    ? 0
    : array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0) / array.length;

module.exports = find_average;

//not optimized
// if (array.length > 1) {
//   let sum = array.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   }, 0);

//   return sum / array.length;
// }
// //  if empty array, return 0
// else if (!array.length) {
//   return 0;
// }
// // if 1 item, return that item
// else {
//   return array[0];
// }
