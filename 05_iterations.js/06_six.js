// =========================================================================
// ARRAY ITERATION: THE FOREACH RETURN LIMITATION & THE POWER OF FILTER
// =========================================================================

// 1. The forEach Return Limitation
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    return item;
} );

console.log(values); 
// OUTPUT: undefined
// REASON FOR UNUSUAL BEHAVIOR: No matter what you return inside a forEach callback, 
// forEach itself ALWAYS returns 'undefined'. It cannot be used to generate a modified 
// copy or a filtered subset of data directly into a variable.


// 2. The Solution: .filter() vs. The Manual forEach Approach
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// --- Approach A: Using .filter() (Declarative and Clean) ---
const newNums = myNums.filter( (num) => {
    return num > 4; // Elements that return 'true' are added to the new array
} );
console.log(newNums); 
// OUTPUT: [5, 6, 7, 8, 9, 10]

// --- Approach B: Using forEach manually (Imperative and Verbose) ---
const manualNums = [];
myNums.forEach( (num) => {
    if (num > 4) {
        manualNums.push(num); // We must manually create and update an external array
    }
} );


// ++++++++++++++++++ ⚠️ THE ARROW FUNCTION SCOPE TRAP ++++++++++++++++++
// If you write implicit return syntax WITHOUT curly braces, it works seamlessly:
//    const test1 = myNums.filter( (num) => num > 4 )  --> Returns [5, 6, ... ]
//
// If you open curly braces `{}` to create a block scope, you MUST write the 'return' keyword:
//    const test2 = myNums.filter( (num) => { num > 4 } ) --> Returns [] (Empty array!)
// Without the word 'return', it implicitly returns undefined for everything, failing the filter.


// 3. Real-World Application: Simulating Database Queries
const books = [
    { title: 'Book One',   genre: 'Fiction',     publish: 1981, edition: 2004 },
    { title: 'Book Two',   genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History',     publish: 1999, edition: 2007 },
    { title: 'Book Four',  genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five',  genre: 'Science',     publish: 2009, edition: 2014 },
    { title: 'Book Six',   genre: 'Fiction',     publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History',     publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science',     publish: 2011, edition: 2016 },
    { title: 'Book Nine',  genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Query 1: Get all books under the 'History' genre (Implicit return format)
let historyBooks = books.filter( (bk) => bk.genre === 'History');

// Query 2: Get books published on/after 1995 AND fall under 'History' (Block scope explicit return format)
let userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);
/* OUTPUT:
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
]
REASON: 'Book Three' passes both logical checks, while 'Book Seven' fails the year criteria.
*/