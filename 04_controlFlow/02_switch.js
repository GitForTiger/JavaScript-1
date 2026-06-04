// =========================================================================
// THE SWITCH STATEMENT: MULTI-WAY BRANCHING LOGIC
// =========================================================================

// Generic Blueprint Syntax:
// switch (key) {
//     case value:
//          // code to execute
//          break;
//     default:
//          break;
// }

const month = "march";

switch (month) { // The variable inside the parenthesis is what we are evaluating
    case "jan":
        console.log("January");
        break; // The break keyword stops the switch statement from executing further cases.
        
    case "feb":
        console.log("feb");
        break;
        
    case "march":
        console.log("march");
        break; // <-- MATCH FOUND! Code logs "march" and then exits the switch block here.
        
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
// OUTPUT: "march"


// ++++++++++++++++++ Crucial Gotcha: The Missing 'break' Trap ++++++++++++++++++

const testMonth = "feb";

switch (testMonth) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Target Found: February");
        // Oh no! We forgot the 'break' statement here!
    case "march":
        console.log("March logs anyway!");
    case "april":
        console.log("April logs anyway!");
        break; // It will keep falling through until it hits this break.
    default:
        console.log("Default running...");
}
/* OUTPUT for the trap:
"Target Found: February"
"March logs anyway!"
"April logs anyway!"

REASON: In JavaScript, once a switch case matches, if there is no 'break' keyword, 
the engine undergoes "fall-through" behavior. It will unconditionally execute ALL 
subsequent case blocks of code without checking if the case condition matches, 
until it encounters a 'break' or the switch statement ends. (Note: The 'default' case 
would also execute if there was no break after April!)
*/