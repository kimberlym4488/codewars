const rgb = (r, g, b) => {
  // converting decimal into hexidecimal pairs. rgb go from  0 to 255
  //148 convered to the rrggbb structure is the r.
  //here I am going to use the easier toString method with base 16
  let colors = [r, g, b];
  //if I put the colors in an array I can loop through them.

  let hex = [];
  // declare empty hex array to start, I'll push the r,g, and b values into it.
  colors.forEach((color) => {
    // r,g,b should only be between 0-255, but if we get 300 it will be an 'FF' anyway.
    if (color <= 0) {
      hex.push("00");
    } else if (color >= 255) {
      hex.push("FF");
    } else {
      //here is the toString method I found, but I could also spell the math out by doing the remainder (modulo) of the number /16, then add in the logic for the a,b,c,d etc based on 10,11,12, etc.
      const addition = color.toString(16).toUpperCase();
      if (addition.length === 1) {
        hex.push("0" + addition);
        // When the method above eletes the leading zero then it only has a length of 1. It doesn't delete the trailing zero. So I can easily add a 0 back into the hex in first position using template literal or concat.
      } else {
        hex.push(addition);
      }
    }
  });
  //since I'm going in order of r,g,b the loop will add these into my hex array in the correct order.
  return hex.join("");
};

module.exports = rgb;
