// =========================================================================
// OBJECT ITERATION: THE FOR...IN LOOP & THE KEY VS. VALUE CONTRAST
// =========================================================================

// 1. Solving Object Iteration using for...in
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/* OUTPUT:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple

REASON: The for...in loop is tailor-made for plain objects. It iterates over all 
enumerable properties (the KEYS) of the object. To get the value, we use square 
bracket notation: myObject[key].
*/


// 2. Using for...in on Arrays (The Trap!)
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(key); // Let's log just the 'key' first to see what it is
    // console.log(programming[key]); 
}
/* OUTPUT:
0
1
2
3
4

REASON FOR UNUSUAL BEHAVIOR: Many beginners assume this will log "js", "rb", etc. 
But remember: under the hood, JavaScript arrays are just special objects where the keys 
are numbers (indices)! Therefore, for...in only extracts the array's index strings ("0", "1", "2"...), 
not the values. To get the actual programming languages, you have to use programming[key].
*/


// 3. Using for...in on a Map (The Silent Failure)
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const key in map) {
     console.log(key);
}
// OUTPUT: (Absolutely nothing prints! No error, just total silence.)
// REASON: A Map's inner keys and values are stored internally through Map protocols, 
// not as plain object properties. Because a Map has no standard enumerable keys on its surface, 
// the for...in loop finds nothing to look at, skips the block entirely, and exits silently.