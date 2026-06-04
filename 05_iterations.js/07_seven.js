// =========================================================================
// ARRAY TRANSFORMATION: THE MAP METHOD AND METHOD CHAINING PIPELINES
// =========================================================================

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Basic .map() Operation
const basicMap = myNumers.map( (num) => { return num + 10; } );
// REASON: Unlike .filter() which selects a subset of items, .map() visits 
// EVERY single item, passes it into your mathematical/logical expression, 
// and creates a new array out of the modified outputs: [11, 12, 13, ..., 20]


// 2. Advanced Method Chaining Pipeline
// Rule: In a method chain, data passes down sequentially from top to bottom. 
// Each subsequent method receives the array produced by the method right above it!

const newNums = myNumers
                .map((num) => num * 10 )   // Phase 1: Multiplies every item by 10
                .map( (num) => num + 1)    // Phase 2: Adds 1 to every item in the *new* array
                .filter( (num) => num >= 40); // Phase 3: Filters the results from Phase 2

console.log(newNums);
// OUTPUT: [ 41, 51, 61, 71, 81, 91, 101 ]