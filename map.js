const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    // temporary code:
   
    const results = [];
    for (let item of array){
      results.push(item[0])
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

