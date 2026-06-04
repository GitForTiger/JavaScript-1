// =========================================================================
// TRUTHY/FALSY VALUES, SAFETY APPARATUS (??), AND TERNARY SHORTHANDS
// =========================================================================

// 1. The Truthy vs Falsy Evaluation Trap
const userEmail = []; // An empty array

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// OUTPUT: "Got user email"
// REASON: Even though the array is completely empty, an array `[]` is structurally 
// classified as a "truthy" value in JavaScript! 

// 🛑 THE FALSY LIST (Values that evaluate to false when forced into a boolean context):
// false, 0, -0, BigInt 0n, "" (empty string), null, undefined, NaN (Not a Number)

// ✅ THE TRUTHY LIST (Surprising examples that evaluate to true):
// "0" (string containing zero), 'false' (string text), " " (string with a space), 
// [] (empty array), {} (empty object), function(){} (empty anonymous function)


// 2. Safely Checking for Emptiness
// To check if an array is truly empty, look at its length property, not the array itself:
if (userEmail.length === 0) {
    console.log("Array is empty");
}
// OUTPUT: "Array is empty"

// Objects do not have a .length property! To check if an object is empty, you must 
// convert its keys into an array using Object.keys() first, then evaluate the length:
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// OUTPUT: "Object is empty"


// 3. Nullish Coalescing Operator (??)
// Rule: This operator acts as a safety fallback specifically designed for 'null' and 'undefined'.
// It completely ignores other falsy values like 0 or empty strings "".

let val1;
val1 = 5 ?? 10;          // Both are numbers -> takes the first valid value: 5
val1 = null ?? 10;       // Left side is null -> takes fallback: 10
val1 = undefined ?? 15;  // Left side is undefined -> takes fallback: 15

val1 = null ?? 10 ?? 20; // Chaining -> looks across until it encounters the first non-null/undefined value.

console.log(val1);
// OUTPUT: 10


// 4. Ternary Operator (Shorthand if-else)
// Syntax: condition ? execute_if_true : execute_if_false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// OUTPUT: "more than 80"
// REASON: Since the condition (100 <= 80) evaluates to false, the code path 
// after the colon `:` is executed.