// const tail = require(`../tail`);
// const assertEqual = require(`../assertEqual`);

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const tail = require(`../tail`);
const assert = require(`chai`).assert;

describe("check for the last array ", ()=> {
    it("return 4 of [1,2,3,4]", () => {
        assert.strictEqual(tail([1,2,3,4]),4);
    })
})