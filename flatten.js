// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("Assertion Passed: " + actual + " === " + expected);
    } else if (actual !== expected) {
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
console.log(assertEqual(eqArrays([1,1,1],[1,1,1]), true));






const flatten = function(array) {
    var flatArray = [];
    for (let i = 0; i < array.length; i++) {
       if (typeof(array[i]) !== "object") {
           flatArray.push(array[i])
       } else {
           for (let j = 0; j < array[i].length; j++) {
               flatArray.push(array[i][j]);
           }
       }
    }
    console.log(flatArray); 
}

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]