// =========================================================================
// THE TITAN METHOD: ARRAY.REDUCE() AND CART GRAND TOTALS
// =========================================================================

const myNums = [1, 2, 3];

// 1. Reducer Anatomy with Detailed Console Logs
const loggedTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0); // <-- This '0' is the INITIAL VALUE of the accumulator!

console.log("Final Loop 1 Total:", loggedTotal);
/* OUTPUTS FOR LOOPS:
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
Final Loop 1 Total: 6

REASON & TRACING:
- Turn 1: 'acc' takes the initial value (0). 'currval' is the first element (1). It returns 0 + 1 = 1.
- Turn 2: 'acc' inherits the previous return value (1). 'currval' moves to the next element (2). It returns 1 + 2 = 3.
- Turn 3: 'acc' inherits the previous return value (3). 'currval' is the last element (3). It returns 3 + 3 = 6.
- The array ends, so 6 becomes the final result.
*/


// 2. Production Shorthand (Arrow Function Format)
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0);
console.log("Shorthand Total:", myTotal); // OUTPUT: 6


// 3. Real-World Application: Summing Up an E-commerce Shopping Cart
const shoppingCart = [
    { itemName: "js course",           price: 2999 },
    { itemName: "py course",           price: 999 },
    { itemName: "mobile dev course",   price: 5999 },
    { itemName: "data science course", price: 12999 },
];

// We pass 0 as the initial accumulator value because we start with a balance of $0.
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log("Grand Total to Pay:", priceToPay);
// OUTPUT: 22996
// REASON: On every iteration, 'item' represents the current course object. 
// We reach inside, grab 'item.price', add it directly to our running total 'acc', 
// and carry that sum over to the next item until the entire cart is calculated.