// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetter = require(`./countLetter`);
const countOnly = require(`./countOnly`);
const eqArrays = require(`./eqArrays`);
const eqObjects = require(`./eqObjects`);
const findKey = require(`./findKey`);
const findKeyByValue = require(`./findKeyByValue`);
const flatten = require(`./flatten`);
const letterPositions = require(`./letterPosition`);
const map = require(`./map`);
const takeUntil = require(`./takeUntil`);
const without = require(`./without`);

module.exports = {
  head ,
  tail ,
  middle,
  countLetter,
  countOnly, 
  eqArrays, 
  eqObjects, 
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
   map,
  takeUntil, 
   without
};