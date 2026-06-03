// =========================================================================
// ADVANCED ARRAY OPERATIONS: COMBINING, FLATTENING, AND CREATING ARRAYS
// =========================================================================

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// 1. The Wrong Way to Combine: push()ing an array into an array
marvel_heros.push(dc_heros);
console.log(marvel_heros); 
// OUTPUT: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// REASON: push() modifies the original array by inserting the new argument as a SINGLE element. 
// Instead of combining them, it nested the entire 'dc_heros' array inside 'marvel_heros'.

console.log(marvel_heros[3][1]); 
// OUTPUT: "flash"
// REASON: Index 3 grabs the nested array, and index 1 grabs the second element inside that nested array.


// Resetting marvel_heros for the next examples
const original_marvel = ["thor", "Ironman", "spiderman"];

// 2. The Traditional Way to Combine: concat()
const allHeros = original_marvel.concat(dc_heros);
console.log(allHeros); 
// OUTPUT: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
// REASON: concat() merges two or more arrays and returns a BRAND NEW, cleanly merged array.


// 3. The Modern Way to Combine: Spread Operator (...)
const all_new_heros = [...original_marvel, ...dc_heros];
console.log(all_new_heros); 
// OUTPUT: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
// REASON: The spread operator (...) "unwraps" or drops the walls of both arrays, 
// dumping their individual elements into a new array literal. This is preferred in modern JS.


// 4. Flattening Multi-Dimensional Arrays: flat()
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array); 
// OUTPUT: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// REASON: flat(depth) merges nested arrays into a single-level array. 
// Passing 'Infinity' tells JS to keep unpacking arrays no matter how deeply nested they are.


// 5. Array Utility Methods: isArray(), from(), of()
console.log(Array.isArray("Hitesh")); 
// OUTPUT: false
// REASON: "Hitesh" is a primitive String, not an Array object.

console.log(Array.from("Hitesh")); 
// OUTPUT: ["H", "i", "t", "e", "s", "h"]
// REASON: Array.from() takes an iterable object (like a string) and breaks it into an array of individual items.

console.log(Array.from({name: "hitesh"})); // <-- The "Interesting" Behavior!
// OUTPUT: []
// REASON: Array.from() needs an iterable object or something with a 'length' property. 
// A plain object without length doesn't tell JavaScript whether it should turn keys or values into elements, 
// so it gets confused and returns an empty array. To fix this, you'd use Object.keys() or Object.values().

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); 
// OUTPUT: [100, 200, 300]
// REASON: Array.of() creates a brand new array instance out of whatever variables or arguments you pass into it.