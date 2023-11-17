// While Loop
function powersOfTwo() {
    let currentValue = 2;

    while (currentValue <= 65536) {
        console.log(currentValue);
        currentValue *= 2
    }
}

powersOfTwo();


// Do While Loop
//Ice Cream Sales
function sellingIceCream() {
    let allCones = Math.floor(Math.random() * 50) + 50;

    //do pseudocode to help you through a problem

    do {
        console.log(`Welcome to my shop, I have ${allCones} cones to sell.`)

        // Generate a random number between 1 and 5 for cones sold
        let conesSold = Math.floor(Math.random() * 5) + 1;

        if (conesSold <= allCones) {
            // If there are enough cones, log the number sold
            console.log(conesSold + " cones sold...");

            // Subtract the sold cones from the total
            allCones -= conesSold;
        } else {
            // If there are not enough cones, inform the customer
            console.log("Cannot sell you " + conesSold + " cones. I only have " + allCones + "...");
            // console.log(`I cannot sell you ${conesSold} cones. I only have ${allCones}`);
        }

    } while (allCones > 0);

// When all cones are sold, log a success message
    console.log("Yay! I sold them all!");
}
sellingIceCream();
