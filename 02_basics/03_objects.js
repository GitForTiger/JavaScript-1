// =========================================================================
// JAVASCRIPT OBJECTS: LITERALS, SYMBOLS, FREEZING, AND METHODS
// =========================================================================

// 1. Singleton vs Object Literals
// Note: Object.create creates a "singleton" object via a constructor. 
// The method used below {} is an "object literal" (not a singleton by default).

// Declaring a unique Symbol
const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // Key with spaces MUST be a string literal
    [mySym]: "mykey1",               // Correct syntax to use a Symbol as a key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// 2. Accessing Object Properties (Dot vs Bracket Notation)
console.log(JsUser.email);       
// OUTPUT: "hitesh@google.com"
// REASON: Standard dot notation. Cleanest way to access standard keys.

console.log(JsUser["email"]);     
// OUTPUT: "hitesh@google.com"
// REASON: Bracket notation. Behind the scenes, JS tracks all keys as strings anyway.

console.log(JsUser["full name"]); 
// OUTPUT: "Hitesh Choudhary"
// REASON: Bracket notation is MANDATORY here. You cannot use dot notation (JsUser.full name) 
// for keys containing spaces or special characters.

console.log(JsUser[mySym]);       
// OUTPUT: "mykey1"
// REASON: To access a Symbol key, you MUST use bracket notation without quotes. 
// If you used JsUser["mySym"], it would look for a regular string key named "mySym".


// 3. Modifying and Freezing Objects
JsUser.email = "hitesh@chatgpt.com"; // Successfully updates the email

// Object.freeze(JsUser); // <-- If this is uncommented, it locks the object down!

JsUser.email = "hitesh@microsoft.com"; 
// Note: If Object.freeze was active, this change would be silently ignored.
// Since it's commented out, the value successfully changes to "hitesh@microsoft.com".

console.log(JsUser);
/* OUTPUT (Assuming freeze was commented out):
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@microsoft.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'  <-- Notice how the console explicitly marks this as a Symbol!
}
*/


// 4. Adding Functions (Methods) to Objects
JsUser.greeting = function(){
    console.log("Hello JS user");
};

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // 'this' refers to the current object (JsUser)
};

// 5. Executing the Methods
console.log(JsUser.greeting());
// OUTPUT 1: "Hello JS user" (from the inside console.log)
// OUTPUT 2: undefined
// REASON FOR UNDEFINED: greeting() executes its own console.log, but it does not return a value. 
// In JS, a function that returns nothing implicitly returns 'undefined'.

console.log(JsUser.greetingTwo());
// OUTPUT 1: "Hello JS user, Hitesh"
// OUTPUT 2: undefined
// REASON FOR 'Hitesh': The 'this' keyword acts as a pointer to the host object, 
// allowing the function to access 'JsUser.name' dynamically.