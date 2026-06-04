// =========================================================================
// SCOPE, NESTED SCOPES, AND THE HOISTING TRAP
// =========================================================================

// 1. Block Scope vs. Global Scope
let a = 300; // Global Scope: Accessible anywhere in this script

if (true) { 
    // Anything inside {} is Block Scope
    let a = 10;   // Shadowing: This 'a' is local to this block and independent of the global 'a'
    const b = 20; // Block-scoped: Dies when the block ends
    var c = 300;  // var completely ignores block scope! It leaks into the global scope.
    
    console.log("INNER: ", a); 
    // OUTPUT: "INNER: " 10 (Accesses the closest, block-scoped 'a')
}

console.log(a); 
// OUTPUT: 300 
// REASON: The global 'a' was never permanently altered by the 'if' block.

// console.log(b); 
// OUTPUT: ReferenceError: b is not defined
// REASON: 'b' was declared with const inside a block. It is trapped there and cannot be accessed outside.

console.log(c); 
// OUTPUT: 300
// REASON: Variables declared with 'var' leak outside of blocks `{}`. They only respect function boundaries.


// 2. Nested Lexical Scope (The "Ice Cream" Rule)
// Rule: A child function can access its parent's variables, but a parent cannot access its child's variables.
function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username); // Works perfectly! Child function 'two' can look out at parent 'one'.
    }
    
    // console.log(website); 
    // OUTPUT: ReferenceError: website is not defined
    // REASON: Parent scope 'one' cannot peer inside child scope 'two'.

    two(); // Executes child function
}

one(); // Executing 'one' successfully outputs "hitesh" via the inner function two()


// 3. Block-scoped Nesting
if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); 
        // OUTPUT: "hitesh youtube"
    }
    // console.log(website); 
    // OUTPUT: ReferenceError: website is not defined (Trapped in the inner 'if' block)
}
// console.log(username); 
// OUTPUT: ReferenceError: username is not defined (Trapped in the outer 'if' block)


// ++++++++++++++++++ Interesting Concept: Hoisting ++++++++++++++++++

// Case A: Function Declaration (Fully Hoisted)
console.log(addone(5)); 
// OUTPUT: 6
// REASON: Traditional function declarations are "hoisted" to the top of their scope by JavaScript 
// before execution. You can call them *before* they are written in your code file.

function addone(num){
    return num + 1;
}


// Case B: Function Expression / Variable Assignment (Not Hoisted)
addTwo(5); 
// OUTPUT: ReferenceError: Cannot access 'addTwo' before initialization
// REASON: When you store a function inside a variable (`const addTwo`), JavaScript treats it 
// like a normal variable declaration. Variables declared with 'const' or 'let' are hoisted 
// but placed in a "Temporal Dead Zone"—you cannot access them until the engine executes line 77.

const addTwo = function(num){
    return num + 2;
};