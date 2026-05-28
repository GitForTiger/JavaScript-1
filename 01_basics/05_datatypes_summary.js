// As per the official docx, the datatypes in JS are classified into 2 types, 
// based on the ways the values are stored in and accessed from the memory.
// 1. Primitive Datatypes ; 2. Non primitive or Reference type datatypes
// 1. PRIMITIVE DATATYPES : The "call by value" datatypes.
// String, Number, Boolean, Null, Undefined, Symbol(used to make the values unique), BigInt(long long)


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n //big int



// 2. NON PPRIMITIVE OR REFERENCE TYPE DATATYPES
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// typeof returns object for all the non primitive datatypes.
// You might see it returning "function" for functions, but actually it is called object function.

// console.log(typeof anotherId);



// STACK AND HEAP MEMORY
// primitive datatypes : stack memory : copy architecture
// non primitive datatypes : heap memory : reference architecture

let myname = "Apratim"
let anothername = myname
console.log(anothername)
anothername = "Ambika"
console.log(myname)
console.log(anothername)

let userOne = {
    email : "chhapra@gmail.com",
    upi : "chhapra@ybl"
}
let userTwo = userOne
userTwo.email = "apratim@gmail.com"
console.log(userOne.email);