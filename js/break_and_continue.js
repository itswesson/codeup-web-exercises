console.log("Inside break_and_continue.js")

function promptUser1to50() {
    let userNumber;

    do {
        // prompt the user
        userNumber = prompt("Give me an odd number between 1 and 50?");
        // check users answer
        if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
            // users input is invalid
            break;
        } else {
            alert("Invalid input. Please enter a valid odd number between 1 and 50.");
        }
    } while (true);

    console.log("Number to skip is: " + userNumber);

    for (let i = 1; i <= 50; i += 2) {
        if (i == userNumber) {
            console.log("Yikes! Skipping number: " + userNumber);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}

promptUser1to50();