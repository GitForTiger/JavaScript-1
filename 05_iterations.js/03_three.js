// =========================================================================
// ADVANCED ITERATION: FOR...OF, MAPS, AND OBJECT DESTRUCTURING IN LOOPS
// =========================================================================

// 1. Using for...of on Arrays
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
// OUTPUT: Prints 1, 2, 3, 4, 5 on separate lines.
// REASON: The for...of loop automatically extracts the literal VALUE of each element 
// in the array directly, removing the need to track index counters (i++).


// 2. Using for...of on Strings
const greetings = "Hello world!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
// REASON: Strings are also iterable objects! The loop extracts every individual letter 
// and space sequentially from start to finish.


// 3. Working with Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Duplicate key entry attempt

console.log(map);
// OUTPUT: Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }
// REASON FOR UNUSUAL BEHAVIOR: A Map is an object designed to hold unique key-value pairs 
// and maintain insertion order. Notice that 'IN' was added twice, but it was not duplicated! 
// Maps completely reject duplicate keys; the second entry simply overwrote the original value.


// 4. Iterating over Maps (Array Destructuring in Loops)
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/* OUTPUT:
IN :- India
USA :- United States of America
Fr :- France

REASON: By default, iterating over a Map returns arrays of pairs: ['IN', 'India']. 
Using brackets `[key, value]` cleanly destructures that pair array into separate, usable variables on the fly.
*/


// 5. The Fatal Error: for...of on Objects
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

for (const [key, value] of myObject) {
     console.log(key, ':-', value);
}
// OUTPUT: TypeError: myObject is not iterable
// REASON FOR CRASH: This is the primary takeaway of this snippet! Plain JavaScript objects 
// are NOT fundamentally iterable by default. You cannot throw a for...of loop at an object; 
// it breaks instantly. To loop over objects, you must use alternative tools (which we will look at next).