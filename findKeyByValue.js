const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("Assertion Passed: " + actual + " === " + expected);
    } else if (actual !== expected) {
      console.log("Assertion Failed: " +  actual + " !== " + expected);
    }
  };


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};
  
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const findKeyByValue = function(bestTVShowsByGenre,value) {
    const valueArr = Object.values(bestTVShowsByGenre)
      for (var arr of valueArr) {
        if (arr = value) {
           return Object.keys(bestTVShowsByGenre).find(key => bestTVShowsByGenre[key] === value);
        }

      }
}

console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));

