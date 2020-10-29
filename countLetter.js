// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("Assertion Passed: " + actual + " === " + expected);
    } else if (actual !== expected) {
      console.log("Assertion Failed: " +  actual + " !== " + expected);
    }
  };
  
const countLetter = function(character) {
    result = {}
      for (const char of character) {
        if (char !== " ") {
            if (result[char]){
                result[char] += 1;
            } else {
                result[char] = 1; 
            }
        }
      }
      return result;
}

console.log(countLetter("lighthouse in the house"));

