const eqObjects = function(object1, object2) {
    const obj1Keys = Object.keys(object1);
    const obj2Keys = Object.keys(object2);
     
     if (obj1Keys.length !== obj2Keys.length){
         return false;
     } 
     
     // [  ob1 keys ] -- x
    //  [ ob2 keys] -- y
    
       for (obj1Key of obj1Keys) {
           if (!(obj1Key in object2)) {
               return false;
           } 
       } 
       // [a,b]
       // [a]
       for (obj1Key of obj1Keys) {
           const obj1Val = object1[obj1Key];  //1
           const obj2Val = object2[obj1Key];  //1
           if (obj1Val !== obj2Val) {
               return false;
           } 
       }
       return true;
    };
    
    
    const ab = { a: "1", b: "2" };
    // [a,b]
    const ba = { b: "2", a: "1" };
    // [b,a]
//console.log(eqObjects(ab, ba)); // => true
    
    // const abc = { a: "1", b: "2", c: "3" };
    // eqObjects(ab, abc); // => false
    
    
///******** */ assertObjectsEqual function ********* //// 

const assertObjectsEqual = function(actual, expected) {
    // Implement me!
   const inspect = require('util').inspect; 
   if (eqObjects(actual, expected)) {
       console.log("Assertion Passed: " + actual + " === " + expected);
   } else  {
       console.log("Assertion Failed: " +  actual + " !== " + expected);
   }
};

assertObjectsEqual(ab,ba);

//console.log("Example label: ${inspect(actual)}");









