// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
// The reason for the different outputs in the lines 12 and 13 is
// that the == works differentlhy than the >, <, >=, <=
// The non equality (all except ==) converts null to 0.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); //all false

// === is the strict check : checks the datatype along with the values

console.log("2" === 2); //false
console.log("2"==2); //true : here the data conversion occurs
console.log(2===2); //true

// CRUX : avoid direct comparisons of values of different datatypes.