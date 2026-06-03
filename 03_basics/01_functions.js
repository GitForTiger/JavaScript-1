// =========================================================================
// JAVASCRIPT FUNCTIONS: ARGUMENTS, REST OPERATOR, AND TYPE HOPPING
// =========================================================================

// 1. Function Reference vs. Function Execution
function sayMyName(){
    console.log("A"); console.log("P"); console.log("R"); console.log("A");
    console.log("T"); console.log("I"); console.log("M");
}

// sayMyName;    // <-- This is a Reference. It tells JS the function exists, but doesn't run it.
sayMyName();     // <-- This is Execution. The parentheses () kick off the code inside.
// OUTPUT: Prints "A", "P", "R", "A", "T", "I", "M" on separate lines.


// 2. Parameters vs. Arguments & The power of 'return'
// In old function: console.log(number1 + number2) inside a function prints to console, but yields no data.
function addTwoNumbers(number1, number2){ // number1, number2 are PARAMETERS (placeholders)
    return number1 + number2;             // The return keyword hands data back to the outside world.
    console.log("This will never run");  // Any code written AFTER a return statement is unreachable dead code!
}

const result = addTwoNumbers(3, 5);       // 3, 5 are ARGUMENTS (real data)
console.log("Result: ", result); 
// OUTPUT: "Result: " 8
// REASON: Because the function used 'return', we can successfully capture the computation inside a variable.


// 3. Default Parameters & Truthy/Falsy Guard Clauses
function loginUserMessage(username = "sam"){ // "sam" is the default value if nothing is passed
    // !username checks if username is undefined, null, or empty string ""
    if(!username){ 
        console.log("Please enter a username");
        return; // Exits the function early to prevent the string below from generating
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh")); 
// OUTPUT: "hitesh just logged in"

console.log(loginUserMessage());         
// OUTPUT: "sam just logged in"
// REASON: Because no argument was passed, the default parameter "sam" stepped in. 
// Note: If there was NO default value ("sam"), username would be 'undefined', triggering the if condition!


// 4. Handling Variadic Arguments: The Rest Operator (...)
// When used in function parameters, "..." acts as the REST operator (gathers remaining elements).
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000, 3500));
// OUTPUT: [500, 2000, 3500]
// REASON: val1 takes 200, val2 takes 400. The REST operator (...num1) bundles up 
// every single remaining value left over into a clean array. Great for e-commerce carts!


// 5. Passing Objects to Functions (Type Safety Warning!)
const user = {
    username: "hitesh",
    prices: 199 // <-- Notice the key is plural 'prices'
};

function handleObject(anyobject){
    // This function expects a key named single 'price'
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
// OUTPUT: "Username is hitesh and price is undefined"
// REASON: JavaScript is dynamically typed. It doesn't check if the object has the correct keys ahead of time. 
// Since user has 'prices' and not 'price', trying to read 'user.price' evaluates to 'undefined'.

// Passing an on-the-fly anonymous object literal:
handleObject({
    username: "sam",
    price: 399
});
// OUTPUT: "Username is sam and price is 399" (Works perfectly because keys match exactly)


// 6. Passing Arrays to Functions
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); 
// OUTPUT: 400

// Direct execution passing an anonymous array literal:
console.log(returnSecondValue([200, 400, 500, 1000]));
// OUTPUT: 400