
// const findKeyByValue = function(bestTVShowsByGenre,value) {
//     const valueArr = Object.values(bestTVShowsByGenre)
//       for (var arr of valueArr) {
//         if (arr = value) {
//            return Object.keys(bestTVShowsByGenre).find(key => bestTVShowsByGenre[key] === value);
//         }

//       }
// }

// console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));


const findKey = function(array,callback) {
    
    let i = 0;
    while (!callback(Object.values(array)[i])) {
        i++; 
    }
    return Object.keys(array)[i];

}




console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3)); // => "noma"