// =========================================================================
// ITERATION LOGIC: FOR LOOPS, NESTING, AND JUMP STATEMENTS
// =========================================================================

// 1. Basic For Loop & Block Scope Check
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}
// OUTPUT: Prints 0, 1, 2, 3, 4, then "5 is best number", then 5, 6, 7, 8, 9, 10.

// console.log(element); 
// OUTPUT: ReferenceError: element is not defined
// REASON: 'element' is declared using const inside the loop block. It vanishes 
// the moment the loop finishes executing its iterations.


// 2. Nested Loops (Creating a Multiplication Table Grid)
for (let i = 1; i <= 2; i++) { // Kept to 2 iterations for display clarity
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
/* OUTPUT:
Outer loop value: 1
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
Outer loop value: 2
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
REASON: For every single iteration of the outer loop (i), the inner loop (j) 
runs completely through its entire lifecycle from start to finish.
*/


// 3. Iterating Through an Array
let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// OUTPUT: "flash", "batman", "superman"
// REASON: Since arrays are 0-indexed, we start at index = 0. The guard condition 
// must be index < length (index < 3), meaning it stops at index 2, preventing an 'undefined' leak.


// ++++++++++++++++++ Jump Statements: Break vs. Continue ++++++++++++++++++

// 4. The Break Keyword (Absolute Termination)
for (let index = 1; index <= 6; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break; // Shuts down the entire loop immediately!
    }
    console.log(`Value of i is ${index}`);
}
/* OUTPUT:
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
REASON: The break statement instantly snaps the runtime thread right out of the loop body. 
Indices 5 and 6 never get logged.
*/


// 5. The Continue Keyword (Skip Current Turn)
for (let index = 1; index <= 6; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skips the REST of this specific iteration turn!
    }
    console.log(`Value of i is ${index}`);
}
/* OUTPUT:
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6

REASON: Notice that "Value of i is 5" is MISSING! The continue statement tells the engine: 
"Stop right here, jump back up to the top increments (index++), and skip straight to the next turn (6)."
*/