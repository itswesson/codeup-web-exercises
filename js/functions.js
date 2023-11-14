"use strict";


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayHello(name) {
//     return "Hello, " + name + "!";
// }
// console.log(sayHello("codeup"))

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

function sayHello(name) {
    return "Hello, " + name + "!";
}
console.log(sayHello("Eddie"))


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Doug"
function sayHello(myName) {
    return "Hello, " + myName + "!"
}
    console.log(sayHello(myName))


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

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

function isTwo(number) {
  return number === 2;
}
console.log(random);
console.log(isTwo(random));

function isSeven(number) {
    return number === 7;
}
// console.log((isSeven(9)))

function doubleIt(number) {
    return number * 2;
}
// console.log(doubleIt(4))

function minusThree(number) {
    return number - 3
}
// console.log(minusThree(7))

function greaterThan(number) {
    return number >= 5
}
// console.log(greaterThan(9))
function myTip(number) {
    return number * .20
}
// console.log(myTip(43.55))

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
// Create a function named 'calculateTip'
// function should accept a tip percentage and the total of the bill
// return the amount to tip

function calculateTip(tipPercent, billTotal) {
    return tipPercent * billTotal
}
console.log(calculateTip(0.20, 20));
console.log(calculateTip(0.25, 25.50));
console.log(calculateTip(0.15, 33.42));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// prompt user for bill total
// prompt user for tip percentage
// use calculateTip to get the total tip amount
// alert user with total tip amount

const userBillTotal = prompt("Enter the total bill cost")
const userTipPercent = prompt("Enter the percent you would like to tip")
const




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
//create a function named "applyDiscount"
// accept a price (before discount is applied)
// and accept a discount percentage (a number between 0 and 1)
// It should return
// result of applying the discount to the original price

const applyDiscount = (priceBeforeDiscount, discountPercent) => {
    return priceBeforeDiscount - (priceBeforeDiscount * discountPercent);
}

let originalPrice = 100
let discountPercent = .20 // 20%
console.log(applyDiscount(originalPrice, discountPercent)); // 80

**See Steves work/walkthrough on Github // jackalope webexercises repo**

