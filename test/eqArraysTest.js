const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);

console.log(eqArrays([1,1,1],[1,1,1]));
console.log(assertEqual(eqArrays([1,1,1],[1,1,1]),true));