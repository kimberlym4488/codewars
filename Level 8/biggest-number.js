// global array
var arr = [3, 6, 4, 5, 2, 1];
// Solved 3 ways

// Math.max

const biggest1 = (arr) => {
  // use the Math.max function to grab the biggest item out of the spread array
  var largestNumber = Math.max(...arr);

  return console.log(largestNumber);
};

// Sort()

const biggest2 = (arr) => {
  // first sort my array from smallest to biggest
  arr.sort((a, b) => a - b);
  // console.log(to make sure I sorted it the right way)
  console.log(arr);
  // return the last (biggest) item in the array.
  return console.log(arr[arr.length - 1]);
};

// forEach

const biggest3 = (arr) => {
  // declare a largestNumber starting variable outside of the forEach loop.
  let largestNumber = 0;
  //  let largestNumber = Math.max(...arr)

  // loop through each item and compare two numbers, assign biggest number as biggest number

  arr.forEach((element) => {
    //if my current index value (3) is bigger than 0, assign largestNumber the max of the two values
    //second time through, if my index value (6) is bigger than 3, assign largestNumber '6'.
    largestNumber = Math.max(largestNumber, element);
  });
  // return the last (biggest) item in the array.
  return console.log(largestNumber);
};

biggest1(arr);
biggest2(arr);
biggest3(arr);
