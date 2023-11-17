// Exercise #1
console.log("Inside Loops.js")

// Remember "FLC"
//
//     F: Function Definition
// The function starts with the keyword function followed by the function name (showMultiplicationTable).
// Inside the parentheses, there's a parameter named number, indicating that the function expects a number as an input.
//     L: Loop Structure
// Inside the function, there's a for loop. Remember the loop structure: for (let i = 1; i <= 10; i++).
// let i = 1: Initialize a variable i to 1.
// i <= 10: Continue the loop as long as i is less than or equal to 10.
// i++: Increment i by 1 in each iteration.
//     C: Console Output
// Inside the loop, there's a block of code that calculates a result (number * i) and logs the result to the console using console.log.




// Exercise #2
// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// For example, showMultiplicationTable(7) should output times table 1-10

function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number + " * " + i + " = " + result);
    }
}

showMultiplicationTable(5)


// Exercise #3
// Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}



//Exercise #4
//Create a for loop that uses console.log to create the output shown below.
//1
//22
//333
//4444
//55555

for (let i = 1; i <= 9; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

//Exercise #5
// Create a for loop that uses console.log to create the output shown below.
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i = 100; i >= 5; i -= 5) {
    console.log(i)
}


