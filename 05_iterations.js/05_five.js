// =========================================================================
// HIGHER-ORDER ARRAY METHODS: THE FOREACH POWERHOUSE
// =========================================================================

const coding = ["js", "ruby", "java", "python", "cpp"];

// 1. Variant A: Standard Anonymous Function Callback
coding.forEach( function (val) {
    // console.log(val);
} );


// 2. Variant B: Arrow Function Callback (Most Common in Modern JS)
coding.forEach( (item) => {
    // console.log(item);
} );


// 3. Variant C: Passing a Reference to a Pre-defined Function
function printMe(item){
    console.log(item);
}

// CRITICAL NOTE: You pass only the name 'printMe', NOT 'printMe()'. 
// If you add parentheses (), the function executes immediately once, 
// rather than letting forEach execute it on each turn.
coding.forEach(printMe); 
// OUTPUT: "js", "ruby", "java", "python", "cpp" on separate lines.


// 4. The Hidden Parameters: item, index, and complete array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} );
/* OUTPUT:
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
...and so on.
REASON: The callback function inside forEach secretly receives up to three arguments 
automatically from JavaScript on every loop: the item itself, the current index number, 
and the entire original array blueprint.
*/


// 5. Real-World Application: Iterating Over an Array of Objects
const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java",       languageFileName: "java" },
    { languageName: "python",     languageFileName: "py" },
];

myCoding.forEach( (item) => {
    console.log(item.languageName);
} );
/* OUTPUT:
javascript
java
python

REASON: In production code (like fetching data from a database API), information 
almost always arrives as an array of objects. The variable 'item' represents the single 
object on each turn, allowing you to elegantly jump inside using dot notation (`item.languageName`).
*/