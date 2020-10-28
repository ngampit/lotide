// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log("Assertion Passed: " + actual + " === " + expected);
    } else  {
      console.log("Assertion Failed: " +  actual + " !== " + expected);
    }
};

const eqArrays = function(a,b) {
    if (a.length !== b.length){
        return false
    } else {
        for (let i = 0; i < a.length; i++){
          if (a[i] != b[i]){
             return false ; 
          }         
        } 
        return true;   
    }
}  

//console.log(eqArrays([1,1,1],[1,1,1]));
//console.log(assertEqual(eqArrays([1,1,1],[1,1,1]), true));

assertArraysEqual([1,1,1],[1,1,1]);
assertArraysEqual([1,1,1],[1,1,2]);