# Codewars Challenges

My codewars solving process and solutions.

I love solving problems so let's take on some codewars. Posting my solutions by kata level (1 through 8, but 8 is beginner and 1 is crazy expert).

## Here's an easy example:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
```js
//map all items to a new array where everything is doubled! This is assuming our array is only numbers and is not empty!
function maps(x){
 return x.map(element => element*2)
}

//now lets try an arrow function
maps = (x) => x.map(element => element*2)

```
Every file has tests to pass, these are the basic ones we get for initial testing before attempting the longer tests.
```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", ()=>{
  it("Fixed tests", () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
  });
});
```


## Contact

[Email](kmorandev@gmail.com)<br>
[Portfolio](https://github.com/kimberlym4488/reactive-portfolio)<br>
[LinkedIn](https://www.linkedin.com/in/kim-moran-82158371/)<br>

Let's do this!
![image](https://user-images.githubusercontent.com/92805933/172551139-84ef24d5-004e-42ff-b37c-5d0870e32f23.png)
