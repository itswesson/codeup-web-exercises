"use strict";

console.log("Inside functions.js");

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// DONE  Create a function called 'sayHello'
// DONE  takes a parameter 'name'
// DONE  should return a message
// DONE  that says hello to the passed in name.


// Both of these are correct:

// const sayHello = (name) => {
//     return `Hello, ${name}!`;
// }

function sayHello(name) {
    return `Hello, ${name}`;
}


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// DONE  Call the function 'sayHello'
// DONE  pass your name as a string literal argument.
// DONE  Store the result in a variable named 'helloMessage'
// DONE  console.log 'helloMessage' to check your work

const helloMessage = sayHello('Steve');
console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


// DONE  Store your name as a string in a variable named 'myName'
// DONE  pass that variable to the 'sayHello' function.
// DOME  output in the console.

const myName = "Steve";

// These two are the same

// const secondHelloMessage = sayHello(myName);
// console.log(secondHelloMessage);

console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);
console.log(random);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */


// DONE  Create a function called 'isTwo'
// DONE  takes a number as a parameter
// DONE  function should return a boolean value
// DONE  based on whether or not the passed number is the number 2
// DONE  Call the function 'isTwo'
// DONE  passing the variable 'random' as an argument
// DONE  console.log *outside of the function* to check your work

// Arrow Function one liner:
// const isTwo = (num) => num === 2;

function isTwo(num) {
    return num === 2; // boolean value
}

console.log(isTwo(random));

// Testing difference between double and triple equals
// console.log(isTwo('2'));
// console.log(isTwo(2));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// DONE  Create a function named 'calculateTip'
// DONE  the function should accept a tip percentage and the total of the bill
// DONE  return the amount to tip

// Arrow Function one liner:
// const calculateTip = (tipPercent, billTotal) => (tipPercent * billTotal).toFixed(2);

function calculateTip(tipPercent, billTotal) {
    // These two are the same:

    // return (tipPercent * billTotal).toFixed(2); // amount to tip

    const tipTotal = tipPercent * billTotal;
    return tipTotal.toFixed(2);
}


// What the function would look like if we got whole numbers for tipPercent:
// function calculateTip(tipPercent, billTotal) {
//     return ((tipPercent / 100) * billTotal).toFixed(2);
// }

console.log(calculateTip(0.20, 20)); // returns 4
console.log(calculateTip(0.25, 25.50)); // returns 6.375
console.log(calculateTip(0.15, 33.42)); // returns 5.013



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// DONE  prompt user for bill total
// DONE  prompt user for tip percentage
// DONE  use calculateTip to get the total tip amount
// DONE  alert user with total tip amount

// const userBillTotal = prompt("Enter your total bill cost");
// const userTipPercent = prompt("Enter the percent you would like to tip");
// const totalTipAmount = calculateTip(userTipPercent, userBillTotal);
// alert(`The amount you should tip is: $${totalTipAmount}`);



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


// DONE  Create a function named `applyDiscount`
// DONE  accept a price (before a discount is applied),
// DONE  and accept a discount percentage (a number between 0 and 1)
// DONE  It should return
// DONE  result of applying the discount to the original price.

const applyDiscount = (priceBeforeDiscount, discountPercent) => {
    return (priceBeforeDiscount - (priceBeforeDiscount * discountPercent)).toFixed(2);
}


let originalPrice = 100;
let discountPercent = .2; // 20%
console.log(applyDiscount(originalPrice, discountPercent)); // 80

console.log(applyDiscount(45.99, 0.12));





