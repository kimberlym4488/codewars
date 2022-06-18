# Codewars Challenges

My codewars solving process and solutions.

I love solving problems so let's take on some codewars. Posting my solutions by kata level (1 through 8, but 8 is beginner and 1 is crazy expert).

## Here's an easy example:

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

_Return True if yes, False otherwise :)_

```js
function hero(bullets, dragons) {
  // if dragons*2 is less than or equal to bullets, we win!
  // if dragons * 2 is MORE than bullets, we lose :(
  // I could do this with an if/else but lets try a nice one liner using a 'ternary, with the ? and :'
  return dragons * 2 <= bullets ? true : false;
}
```

With chai testing, too!

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Invert array values", () => {
  it("Basic Tests", () => {
    assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    assert.deepEqual(invert([]), []);
    assert.deepEqual(invert([0]), [-0]);
  });
});
```

## Contact

[Email](kmorandev@gmail.com)<br>
[Portfolio](https://github.com/kimberlym4488/reactive-portfolio)<br>
[LinkedIn](https://www.linkedin.com/in/kim-moran-82158371/)<br>

Let's do this!
![image](https://user-images.githubusercontent.com/92805933/172551139-84ef24d5-004e-42ff-b37c-5d0870e32f23.png)
