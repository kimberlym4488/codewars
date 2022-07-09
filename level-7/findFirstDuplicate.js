const findFirstDuplicate = (array) => {
  //create an object
  let count = {};
  // loop through our array and add each item to the object as count. So the key would be the number and the value would be the count of that number
  for (let element of array) {

    //use a conditional statement to check if the element is in the count object. We'll return first value greater than 1
    if (!count[element]) {
      count[element] = 1;
    } else {
      return element;
    }
}
// if there are no matches, we return undefined at the end of our array
return undefined;
};

module.exports = findFirstDuplicate;
