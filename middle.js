// // FUNCTION IMPLEMENTATION

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


module.exports = middle;  
   

