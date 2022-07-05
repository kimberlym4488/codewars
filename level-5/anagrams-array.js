const anagrams = (word, words) => {
  // create an empty array in which to push the 'true' words
  let anagrams = [];

  //alphabetize my test word
  let testWord = word.split("").sort().join("");

  //to avoid nested for loops maybe I need to sort the words alphabetically first. Then do a perfect match test in a second loop. And push the true anagrams into an array.

  //I should have used a filter to return the ones that passed the test (the anagrams)
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

// thoughts. What about if a word has numbers in it. Or the test word has special characters? Shall I still return i
