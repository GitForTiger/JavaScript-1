// =========================================================================
// ADVANCED OBJECTS: NESTING, MERGING, GLOBAL METHODS, AND DESTRUCTURING
// =========================================================================

// 1. Singleton vs Literal Declaration
const tinderUser1 = new Object(); // Singleton object
const tinderUser = {};            // Non-singleton literal object (Both function identically here)

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); 
// OUTPUT: { id: '123abc', name: 'Sammy', isLoggedIn: false }


// 2. Nested Objects (Accessing deep layers)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname); 
// OUTPUT: "hitesh"
// REASON: Optional chaining notation works from the outside layer inward.


// 3. Merging Objects: The Great "Object.assign" Mystery
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// --- NESTING TRAP ---
// const obj3_nested = { obj1, obj2 }; 
// Result: { obj1: {1: "a"...}, obj2: {3: "a"...} } -> It nests them instead of combining.

// --- DIFFERENCE EXPLAINED ---
// Syntax: Object.assign(target, ...sources) -> It copies all properties into the TARGET object.

// Line 27:
const obj3_safe = Object.assign({}, obj1, obj2, obj4);
// REASON: The target is a fresh, empty object `{}`. Properties from obj1, obj2, and obj4 
// are copied into this new empty object. None of your original objects are mutated/changed!

// Line 28:
const obj3_mutated = Object.assign(obj1, obj2, obj4);
// REASON: The target here is `obj1`. JavaScript physically injects the properties of 
// obj2 and obj4 directly INTO obj1. obj1 is now permanently modified to contain all values.

// --- THE MODERN SOLUTION (SPREAD OPERATOR) ---
const obj3 = {...obj1, ...obj2}; 
console.log(obj3); 
// OUTPUT: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// REASON: Just like arrays, the spread operator seamlessly merges them into a clean, new object.


// 4. Arrays of Objects (Common Database/API Structure)
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "sam@gmail.com" }, // fixed duplicate data for tracking
    { id: 3, email: "alex@gmail.com" },
];

console.log(users[1].email); 
// OUTPUT: "sam@gmail.com"
// REASON: standard array index notation followed by object property accessor.


// 5. High-Level Object Utility Methods
console.log(Object.keys(tinderUser));   
// OUTPUT: ['id', 'name', 'isLoggedIn'] -> Returns an array of keys (Great for looping!)

console.log(Object.values(tinderUser)); 
// OUTPUT: ['123abc', 'Sammy', false] -> Returns an array of the values.

console.log(Object.entries(tinderUser)); 
// OUTPUT: [ ['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false] ] -> Array of key-value pairs.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
// OUTPUT: true
// REASON: Safely checks if a property exists directly on the object (returns boolean).


// 6. Object Destructuring & Renaming
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Instead of repeatedly writing: course.courseInstructor
// We destructure it, extract it, and rename it to 'instructor' all in one line:
const { courseInstructor: instructor } = course;

// console.log(courseInstructor); 
// OUTPUT: ReferenceError! 
// REASON: Once renamed, the old variable name 'courseInstructor' no longer exists in this scope.

console.log(instructor); 
// OUTPUT: "hitesh"


// 7. API Representation (Raw JSON Concept at the end of your snippet)
// An API returns data either as a single raw JSON Object format:
// { "name": "hitesh", "coursename": "js in hindi", "price": "free" }
// Or a JSON Array format containing multiple objects:
// [ {}, {}, {} ]