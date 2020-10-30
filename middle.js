// // FUNCTION IMPLEMENTATION
// const assertArraysEqual = function(actual, expected) {
//     if (eqArrays(actual,expected)) {
//       console.log("Assertion Passed: " + actual + " === " + expected);
//     } else  {
//       console.log("Assertion Failed: " +  actual + " !== " + expected);
//     }
// };

// const eqArrays = function(a,b) {
//     if (a.length !== b.length){
//         return false
//     } else {
//         for (let i = 0; i < a.length; i++){
//           if (a[i] != b[i]){
//              return false ; 
//           }         
//         } 
//         return true;   
//     }
// }  

//console.log(eqArrays([1,1,1],[1,1,1]));
//console.log(assertEqual(eqArrays([1,1,1],[1,1,1]), true));

// assertArraysEqual([1,1,1],[1,1,1]);
// assertArraysEqual([1,1,1],[1,1,2]);


const middle = function(array) {
    const a = [];
    array = array.sort();
    if (array.length >2 ){
        if (array.length % 2 === 0) {
            a[0] = array[array.length/2-1];
            a[1] = array[array.length/2];}           
        else {
            a[0] = array[(array.length/2)-0.5];
    }
    return a; }

}



    
console.log(middle([1,3,4,2,5,]));   

