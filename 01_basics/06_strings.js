// const name = "john"
// const repocount=9
// // console.log(name+repocount+"Value"); // works but not recommended
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
// // another method of initializing a string 

// const gameName = new String('hitesh-hc-com')

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));



// COMPREHENSIVE COMPILATION OF THE IMPORTANT FUNCTIONS

// =========================================================================
// THE MOST IMPORTANT JAVASCRIPT STRING METHODS
// =========================================================================

// Let's start with a base string to test our methods
const text = "  JavaScript is awesome!  ";
console.log("Original String:", JSON.stringify(text)); 
console.log("--------------------------------------------------\n");

// 1. Cleaning up Whitespace: trim(), trimStart(), trimEnd()
// Extremely useful for cleaning up user inputs (like email fields).
const cleanedText = text.trim(); 
console.log("1. trim():", JSON.stringify(cleanedText)); // "JavaScript is awesome!"


// 2. Finding Case / Changing Casing: toLowerCase(), toUpperCase()
// Crucial for making case-insensitive comparisons.
const upper = cleanedText.toUpperCase();
const lower = cleanedText.toLowerCase();
console.log("2. toUpperCase():", upper); // "JAVASCRIPT IS AWESOME!"
console.log("   toLowerCase():", lower); // "javascript is awesome!"


// 3. Searching and Checking Content: includes(), startsWith(), endsWith()
// These return booleans (true/false) and are great for conditional statements.
console.log("3. includes('awesome'):", cleanedText.includes("awesome")); // true
console.log("   startsWith('Java'):", cleanedText.startsWith("Java"));   // true
console.log("   endsWith('!'):", cleanedText.endsWith("!"));             // true


// 4. Finding Positions: indexOf(), lastIndexOf()
// Returns the index of the first/last occurrence of a substring, or -1 if not found.
console.log("4. indexOf('is'):", cleanedText.indexOf("is")); // 11
console.log("   indexOf('Python'):", cleanedText.indexOf("Python")); // -1


// 5. Extracting Parts of a String: slice()
// Syntax: slice(startIndex, endIndex) -> extracts up to, but NOT including, endIndex.
const wordJava = cleanedText.slice(0, 4); 
const restOfString = cleanedText.slice(11); // If endIndex is omitted, it goes to the end.
console.log("5. slice(0, 4):", wordJava); // "Java"
console.log("   slice(11):", restOfString); // "is awesome!"


// 6. Replacing Content: replace(), replaceAll()
// replace() only swaps the FIRST match. replaceAll() swaps EVERY match.
const sentence = "cats say meow, cats are cute";
const singleReplace = sentence.replace("cats", "dogs");
const allReplace = sentence.replaceAll("cats", "dogs");
console.log("6. replace():", singleReplace); // "dogs say meow, cats are cute"
console.log("   replaceAll():", allReplace); // "dogs say meow, dogs are cute"


// 7. Turning a String into an Array: split()
// Breaks a string into an array based on a separator. Vital for data parsing.
const wordsArray = cleanedText.split(" "); // Split by spaces
console.log("7. split(' '):", wordsArray); // ["JavaScript", "is", "awesome!"]

const lettersArray = "ABC".split(""); // Split by every character
console.log("   split(''):", lettersArray); // ["A", "B", "C"]


// 8. Getting a Single Character: charAt(), at()
// at() is newer and allows negative integers to count backward from the end!
console.log("8. charAt(0):", cleanedText.charAt(0)); // "J"
console.log("   at(-1):", cleanedText.at(-1));       // "!" (gets the last character)


// 9. Padding Strings: padStart(), padEnd()
// Great for formatting numbers, dates, or hiding credit card digits.
const hours = "5";
const formattedTime = hours.padStart(2, "0"); 
console.log("9. padStart(2, '0'):", formattedTime); // "05"


// 10. Bonus - Checking Length (Property, not a function)
// Note: length doesn't have parentheses () because it's a property!
console.log("10. length:", cleanedText.length); // 22