function positiveSum(arr) {
//   declare an empty total variable to return at end.
  let total = 0;
//   loop over each item, if greater than 0 add to the total.
  arr.forEach((element) => { 
   if (element > 0) {
    total += element;
      }
    }) 
//   return the final total.
  return total;
}

module.exports = positiveSum