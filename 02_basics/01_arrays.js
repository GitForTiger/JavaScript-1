// =========================================================================
// JAVASCRIPT ARRAYS & MUTATION
// =========================================================================

// 1. Array Initialization
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]); 
// OUTPUT: 1
// REASON: JavaScript arrays are 0-indexed. Index 1 refers to the second element.


// 2. Array Methods (Push, Pop, Unshift, Shift)
myArr.push(6);    // Adds 6 to the end -> [0, 1, 2, 3, 4, 5, 6]
myArr.push(7);    // Adds 7 to the end -> [0, 1, 2, 3, 4, 5, 6, 7]
myArr.pop();      // Removes the last element (7) -> [0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9); // Adds 9 to the very BEGINNING -> [9, 0, 1, 2, 3, 4, 5, 6]
myArr.shift();   // Removes the first element (9) -> [0, 1, 2, 3, 4, 5, 6]


// 3. Searching Methods
console.log(myArr.includes(9)); 
// OUTPUT: false
// REASON: We just removed 9 using shift(), so it no longer exists in the array.

console.log(myArr.indexOf(3)); 
// OUTPUT: 3
// REASON: The value 3 is located at index 3 of the current array.


// 4. Joining Methods
const newArr = myArr.join();

console.log(myArr);  
// OUTPUT: [0, 1, 2, 3, 4, 5, 6]
// REASON: The original array remains an Array object.

console.log(newArr); 
// OUTPUT: "0,1,2,3,4,5,6"
// REASON: .join() converts the array into a single comma-separated string.


// 5. Slice vs Splice (The Core Concept of this Snippet)
console.log("A ", myArr); 
// OUTPUT: "A " [0, 1, 2, 3, 4, 5, 6]

// --- SLICE ---
const myn1 = myArr.slice(1, 3);

console.log(myn1); 
// OUTPUT: [1, 2]
// REASON: slice(start, end) extracts elements from 'start' index up to, but NOT including, 'end' index.

console.log("B ", myArr); 
// OUTPUT: "B " [0, 1, 2, 3, 4, 5, 6]
// REASON: Critical Behavior! slice() does NOT modify the original array. It returns a shallow copy.

// --- SPLICE ---
const myn2 = myArr.splice(1, 3);

console.log("C ", myArr); 
// OUTPUT: "C " [0, 4, 5, 6]
// REASON: Critical Behavior! splice(start, deleteCount) actually changes (mutates) the original array. 
// It ripped out 3 elements starting from index 1 (which were 1, 2, and 3), leaving behind [0, 4, 5, 6].

console.log(myn2); 
// OUTPUT: [1, 2, 3]
// REASON: splice() returns the elements that were removed from the array. Notice that unlike slice(), 
// the element at index 3 (value 3) WAS included here because the second argument is a "count", not an end-index!