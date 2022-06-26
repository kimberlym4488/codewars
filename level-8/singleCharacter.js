// Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

// Ex:
// Input: “the quick brown fox jumps over the calm kitten quietly”
// Output: "b"

// Input: “this hat is the greatest!”
// Output: "g"

// Input: “what a wonderful day it has been!”
// Output: "o"

function charUnique(string) {
  // given a string of characters.
  // I want to loop through each character in the string and count how many times it appears.
  //Let's look at some edge cases, an empty string
  if (!string.length) {
    return "nothing provided";
  }
  //What about a string with no letters, only numbers or special characters? regex helps here.
  if (!/[a-zA-Z]/.test(string)) {
    return "no alpha characters included in string";
  }

  //I only want my string to iterate over letters now, no special characters or spaces. Let's use regex again on replaceAll method.
  let parsedString = string
    .toLowerCase()
    .replaceAll(/[`~!@#$%^&*()_|+\-=?;:'" ,.<>\{\}\[\]\\\/]/gi, "");

  //create an empty object, which is a key/value association. Ours will accept character and count
  var counts = {};
  //So if it appears more than once, it will have a count of >1.

  // I don't want nested for loops, those are really inefficient
  for (const letter of parsedString) {
    // if I find this letter as a key in my counts that means it already has at least a '1', So add a one to the existing value. If this key isn't already in my object, then add it and make the value '1'.
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
  }

  // I'll be returning one letter. Let's sort them to return the first '1' that is found. Every string has at least '1', 1 :) Thanks to  https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c for the helpful hints on sorting and just getting the keys to work with, then slicing out the first one!
  let letter = Object.entries(counts)
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[0])
    .slice(0, 1);

  return letter[0];
}

module.exports = charUnique;
