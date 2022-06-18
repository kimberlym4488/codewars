function invert(array) {
    // I am given an array of numbers, I need to make negative the positive values and make positive the negative values. 
    // to get to a negative number from a positive, I take the number times 2 and subtract that value from the number. 
    
    //start with an empty array
    let invertedArray = []
    
     //For each element in the array I'm going to do something. 
    array.forEach((element) => {
        //Every item is getting the same treatment, -element-element
        //so if i get 5, it take 5*2 = 10, subtract 10 from 5 i have -5. Or i could start with 5, subtract 5, subtract 5. Two operations either wa.
     element !== 0 ? invertedArray.push(element-element-element) : invertedArray.push(-0);
      //I want to push each changed item into a new array. 
    //what about zero? Make an if/else statement for the 
      
    })
    
    return invertedArray;
  }