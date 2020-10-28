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
//console.log(assertEqual(eqArrays([1,1,1],[1,1,1]), true));

const without = function(source,itemToRemove) {
    for (let i = 0; i < itemToRemove.length; i++){
        for (let j = 0; j < source.length; j++)
        if (itemToRemove[i] === source[j]) {
            // return index of source
            // splice to remove the specific element
            
            source.splice(j,1);
        }
    }   
    console.log(source);
}



//without([1, 2, 3], [1]); // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertEqual(words, ["hello", "world", "lighthouse"]);