function longest(s1, s2) {
  // so I'm given two strings and I need to combine them into one string with only no element repeat.

  // First I could join the strings with concat. I don't think I need to join with any thing since we're getting two separa
  let newString = s1.concat(s2);
  //now we want to push all the values into a new array, split by ''.
  let splitString = newString.split("");

  //yay, this works! Now to remove duplicate values.
  // I wonder if I could filter over the elements and remove the duplicates from the splitString.
  splitString = splitString.filter((element, index) => {
    return splitString.indexOf(element) === index;
  });

  // then i need to sort the final string alphabetically, join it back together and convert it to string using the sort, join, and toString method.
  return splitString.sort().join("").toString();
}

module.exports = longest;
