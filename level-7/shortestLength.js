function findShort(s){
    //i'm given a string, I need to return a number. The number is the length of the shortest word within the string. 
    
    // Could I split the string by a space and have individual words to compare as the shortest string?
    const strings = s.split(' ')
    //Yay it works, now let's compare the strings. 
    //We could sort and return the [0] item
    
    //or we could loop with a foreach
    //declare a variable called shortestString
    let shortestString = strings[0]
        // I could use Math.max to compare each string then make the shorter one the 'shortest' and hold it temporarily til we have a new longest.
        strings.forEach(function (item)  {
            Math.max(shortestString.length, item.length) !== item.length ? shortestString = item : shortestString = shortestString
        })
    return shortestString.length
    }

    module.exports = findShort;