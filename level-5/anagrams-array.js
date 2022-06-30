const anagrams = (word, words) => {
  // create an empty array in which to push the 'true' words
  let anagrams = [];

  //alphabetize my test word
  let testWord = word.split("").sort().join("");

  //to avoid nested for loops maybe I need to sort the words alphabetically first. Then do a perfect match test in a second loop. And push
  //the true anagrams into an array.

  words.forEach((word) => {
    // sort each word and test it against the test word. Push it into anagrams if it passes
    if (word.split("").sort().join("") === testWord) {
      anagrams.push(word);
    }
  });

  // return anagrams array even if empty.
  return anagrams;
};

module.exports = anagrams;
