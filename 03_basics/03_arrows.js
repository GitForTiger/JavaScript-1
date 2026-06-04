// =========================================================================
// THE 'THIS' KEYWORD CONTEXT & ARROW FUNCTION MECHANICS
// =========================================================================

// 1. 'this' inside Object Methods (Implicit Binding)
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // 'this' points directly to the current context (the user object)
    }
};

user.welcomeMessage();
// OUTPUT 1: "hitesh , welcome to website"
// OUTPUT 2: { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }

user.username = "sam"; // Dynamically altering the context's value
user.welcomeMessage();
// OUTPUT 1: "sam , welcome to website"
// REASON: Since 'this' looks at the current operational context, it reflects the updated name.


// 2. Global Context Behavior
console.log(this);
// OUTPUT (Node.js Environment): {} 
// OUTPUT (Browser Console): Window Object { ... } 
// (See the deep-dive explanation at the bottom of this file!)


// 3. 'this' inside Standalone Regular Functions
function regularChai(){
    let username = "hitesh";
    console.log(this.username); 
}
regularChai();
// OUTPUT: undefined
// REASON: In a plain, standalone regular function, 'this' points to the global object (window or global), 
// not the function's local variables. The global object doesn't have a variable named 'username'.


// 4. 'this' inside Arrow Functions Lexical Binding
const arrowChai = () => {
    let username = "hitesh";
    console.log(this); 
};
arrowChai();
// OUTPUT: {} (or Window in a browser)
// REASON: Arrow functions do NOT get their own 'this' context at all! 
// They inherit 'this' from their outer lexical environment (which in this case is the global environment).


// 5. Arrow Function Return Syntaxes (Explicit vs. Implicit)

// Syntax A: Explicit Return (Uses curly braces, MUST use 'return' keyword)
const addTwoA = (num1, num2) => {
    return num1 + num2;
};

// Syntax B: Implicit Return (Single line, NO curly braces, NO 'return' keyword)
const addTwoB = (num1, num2) => num1 + num2;

// Syntax C: Implicit Return with Parentheses (Highly used in React to keep code clean)
const addTwoC = (num1, num2) => ( num1 + num2 );

// Syntax D: Returning an Object Implicitly (The Trap!)
const addTwo = (num1, num2) => ({username: "hitesh"}); 

console.log(addTwo(3, 4));
// OUTPUT: { username: 'hitesh' }
// REASON: To implicitly return an object, you MUST wrap the object literal in parentheses `({ })`. 
// If you write `() => {username: "hitesh"}`, JavaScript thinks the curly braces are the block of 
// the function, treats `username:` as a label, and returns undefined!