// =========================================================================
// CONTROL FLOW: COMPARISONS, LOGICAL OPERATORS, AND CONDITIONALS
// =========================================================================

// 1. Basic If-Else & Comparison Operators
const temperature = 41;

if ( temperature === 40 ){ // === checks value AND data type (Strict Equality)
    console.log("temperature is exactly 40");
} else {
    console.log("temperature is not 40");
}
// OUTPUT: "temperature is not 40"

// Cheat Sheet of Comparison Operators:
// < (Less than), > (Greater than), <= (Less or equal), >= (Greater or equal)
// == (Loose equality: allows type coercion), != (Loose inequality)
// === (Strict equality: no coercion), !== (Strict inequality)


// 2. Conditionals and Block Scope Variables
const score = 200;

if (score > 100) {
    let power = "fly"; // Block-scoped variable inside the conditional block
    console.log(`User power: ${power}`);
}
// OUTPUT: "User power: fly"

// console.log(`User power: ${power}`); 
// OUTPUT: ReferenceError: power is not defined
// REASON: Just like in functions, variables declared with 'let' or 'const' inside 
// an 'if' statement's curly braces `{}` die outside those braces.


// 3. Implicit Scope / Unreadable Shortcuts (Bad Practice!)
const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");
// REASON: This is called implicit multi-line scope. It executes both logs, but 
// it is incredibly messy and heavily discouraged in real-world development because it kills readability.


// 4. Else-If Ladders
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("balance is 900 or more"); 
}
// OUTPUT: "balance is 900 or more"
// REASON: The logic evaluates sequentially from top to bottom. Once a condition 
// tests true, that block fires, and the rest of the ladder is completely skipped.


// 5. Logical Operators: AND (&&) vs OR (||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// --- LOGICAL AND (&&) ---
// Rule: Every single condition separated by && MUST be true. If even one is false, the whole thing fails.
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
// OUTPUT: (Nothing prints)
// REASON: Even though 'userLoggedIn' and 'debitCard' are true, '2 == 3' is false. 
// One false drops the entire evaluation.

// --- LOGICAL OR (||) ---
// Rule: Only ONE condition needs to be true for the whole block to execute.
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// OUTPUT: "User logged in"
// REASON: 'loggedInFromGoogle' is false, but 'loggedInFromEmail' is true. 
// Since at least one condition checked out, the condition passes!