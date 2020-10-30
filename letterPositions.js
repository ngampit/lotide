const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    // iterate through sentence and return index

      
      for (let i = 0; i < sentence.length; i++){
         let char = sentence[i];
         if (char !== " "){
             if (results[char]){
                 results[char].push(i);
             } else {
                 results[char] = [i]; 
             }
          }
      }
      return results; 
}  

console.log(letterPositions("lighthouse in the house"));

