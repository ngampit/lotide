// const assertArraysEqual = require(`../assertArraysEqual`);
// const middle = require(`../middle`)

// console.log(assertArraysEqual(middle([1,3,4,2,5,]),3));

const assert = require(`chai`).assert;
const middle = require(`../middle`);

describe("find the middle of an array",()=>{
    it("should return 3 from [1,5,3,4,2]",()=>{
        assert.deepEqual(middle([1,5,3,4,2]),[3]);
    })
})