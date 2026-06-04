// =========================================================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// =========================================================================

// 1. Syntax Structure: (Function Definition)()
// The first set of parentheses () turns the function into an expression.
// The second set of parentheses () immediately executes it.

(function chai(){
    // This is a NAMED IIFE because the function has an actual identifier ('chai')
    console.log(`DB CONNECTED`);
})(); 
// CRITICAL SEMI-COLON (;)! 
// You MUST end an IIFE with a semi-colon. If you don't, JavaScript won't know 
// that this block is finished, and the next IIFE will crash with a TypeError!


// 2. Unnamed IIFE (Arrow Function format) with Parameters
( (name) => {
    // This is an UNNAMED / anonymous IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');
// OUTPUT: "DB CONNECTED TWO hitesh"
// REASON: The argument 'hitesh' is passed directly into the execution parentheses 
// at the very end, which maps right to the 'name' parameter.