function toJadenCase(str) {
  //I'm given a string, i need to return a string
  //first we need to make the string an array and split each word.
  let arr = str.split(" ");
  //then we can apply toUpperCase on the first letter of each word and lower case the rest of the letters 'substring(1)' using map.
  const upperCased = arr.map(
    (element) => element[0].toUpperCase() + element.substring(1).toLowerCase()
  );
  //finally we can rejoin the words and put them back into a string.
  return upperCased.join(" ").toString();
}

module.exports = toJadenCase;
