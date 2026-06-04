// =========================================================================
// CONDITIONAL ITERATION: WHILE AND DO-WHILE LOOPS
// =========================================================================

// 1. Basic While Loop
let index = 0; // 1. Initialization occurs outside the loop block

while (index <= 10) { // 2. Condition check happens at the entry gate
    console.log(`Value of index is ${index}`);
    index = index + 2; // 3. Upkeep increment step must be handled manually!
}
/* OUTPUT:
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/


// 2. Iterating Through an Array with a While Loop
let myArray = ['flash', "batman", "superman"];
let arr = 0;

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1; // Shorthand equivalent: arr++ or arr += 1
}
/* OUTPUT:
Value is flash
Value is batman
Value is superman
*/


// 3. The Do-While Loop (The Outlier)
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10); // Condition is checked down here at the exit gate!
// OUTPUT: "Score is 11"
// REASON FOR UNUSUAL BEHAVIOR: Notice that the condition asks for score to be <= 10, 
// but our starting score is 11! In a regular while loop, this code would never run. 
// However, a do-while loop executes the code block FIRST, increments the variable, 
// and only then checks the condition to see if it should run a *second* time.