// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  //   if we get an array that isn't ten numbers exit out of question.
  if (
    numbers.length != 10 ||
    numbers.every(function (element) {
      return typeof element !== "number";
    })
  ) {
    return undefined;
  } else {
    // This is the structure for our array numbers
    // (123) 678-10111213

    numbers.splice(0, 0, "(");
    numbers.splice(4, 0, ")");
    numbers.splice(5, 0, " ");
    numbers.splice(9, 0, "-");
    // now we add in the formatting we want since all items are where they should be, which is the output of the array as one string. We can use join to merge all string elements.
    // we can declare it and return the declared variable or return the joined item directly.
    return numbers.join("");
  }
}
