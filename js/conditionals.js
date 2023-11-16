"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Create a function named `analyzeColor`
// Accepts a string that is a color name as input.
// return a message which relates to the color
// Use if else if else to return different messages
// Test using console

// function analyzeColor(color) {
//     if (color === 'blue') {
//         return "The sky is blue"
//     } else if (color === 'red') {
//         return "Blood is red"
//     } else {
//         return `Unsure about ${color}`
//     }
// }
//
// console.log (analyzeColor("blue"))
// console.log (analyzeColor("red"))
// console.log (analyzeColor("brown"))



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor(color) {
//     if (randomColor === 'blue') {
//         return "Sky is blue"
//     }if (randomColor === 'red') {
//         return "Blood is red"
//     }if (randomColor === 'orange') {
//         return "Oranges are orange"
//     }if (randomColor === 'yellow') {
//         return "Buses are yellow"
//     }if (randomColor === 'green') {
//         return "Frogs are green"
//     }if (randomColor === 'indigo') {
//         return "What is indigo"
//     }if (randomColor === 'violet') {
//         return "Barney is violet"
//     }
// }
// console.log (analyzeColor("randomColor"))







/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
//  */
// let analyzeColor= prompt("What is your favorite color?")
//
//     switch (analyzeColor) {
//         case "blue":
//             alert("Oh wow, the sky is blue");
//             break;
//         case "red":
//             alert("Oh wow, blood is red");
//             break;
//         case "orange":
//             alert("Oh wow, oranges are orange");
//             break;
//         case "yellow":
//             alert("Oh wow, buses are yellow");
//             break;
//         case "green":
//             alert("Oh wow, frogs are green");
//             break;
//         case "indigo":
//             alert("Oh wow, what is indigo");
//             break;
//         case "violet":
//             alert("Oh wow, Barney is violet");
//             break;
//         default:
//             alert("Oh wow, I've never heard of that color")
// }

// ^this needs to be refactored, see photo taken on 15 NOV 23



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// prompt("What is your favorite color?")
// function analyzeColor(color) {
//     if (analyzeColor(color) === 'blue') {
//         alert("Oh wow, the sky is blue");
//     }
//     }if (color === 'red') {
//         return "Blood is red"
//     }if (randomColor === 'orange') {
//         return "Oranges are orange"
//     }if (randomColor === 'yellow') {
//         return "Buses are yellow"
//     }if (randomColor === 'green') {
//         return "Frogs are green"
//     }if (randomColor === 'indigo') {
//         return "What is indigo"
//     }if (randomColor === 'violet') {
//         return "Barney is violet"
//     }
// }






/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


// DONE Write a function named `calculateTotal`
// DONE accepts a lucky number and total amount
// returns the discounted price.

// function calculateTotal (luckyNumber, totalAmount) {
//     if (luckyNumber === 0) {
//         return totalAmount;
//     } else if (luckyNumber === 5) {
//         return 0;
//     } else if (luckyNumber === 1) {
//         return totalAmount * 0.9;
//     } else if (luckyNumber === 2) {
//         return totalAmount * 0.75;
//     } else if (luckyNumber === 3) {
//         return totalAmount * 0.65;
//     } else {
//         return totalAmount * 0.5;
//     }
// }







/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);

// Prompt the user for their total bill
// use  `calculateTotal` with the prompted amount
// alert lucky number
// alert price before discount
// alert price after discount

const userTotal = prompt("Enter your total amount")
const totalAfterDiscount = calculateTotal

FINISH UPDATING from STEVES NOTES


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// uses a `confirm` dialog to ask the user if they would like to enter a number
// If they click 'Ok', prompt the user for a number
// 3 separate alerts to tell the user:
    // whether the number is even or odd
    // what the number plus 100 is
    // if the number is negative or positive

const userContinue = confirm("Do you want to enter a number?");
if(userContinue) {
    const userNumber = prompt("Enter a number");
    const isEven  = userNumber % 2 === 0;

//     let isEven;
//     if(userNumber % 2 === 0) {
    alert(`$`{userNumber} is ${isEven ? 'even' : 'odd'}`)            
}   
        
        GET NOTES FROM STEVE GITHUB Jackalope