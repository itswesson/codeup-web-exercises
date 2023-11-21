console.log ("Inside Intro to Objects")

// (function() {
//     "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
//
    let person = {
        firstName: "Edward",
        lastName: "Wesson",
        sayHello: function() {
            return "Hello from " + this.firstName + " " + this.lastName + "!"
                            }
    };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.sayHello());










    //
    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */

    // DONE see above


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    let discountThreshold = 200;
    let discountRate = 0.1;

shoppers.forEach(function(shopper) {
    let name = shopper.name;
    let amount = shopper.amount;
    let discount = 0;

    if (amount >= discountThreshold) {
        discount = amount * discountRate;
    }

    let finalAmount = amount - discount;
    console.log(name + ':');
    console.log('Amount before discount: $' + amount);
    console.log('Discount: $' + discount);
    console.log('Amount after discount: $' + finalAmount);
    console.log('');

});



    /** TODO:
     * C console.log(name + ':');
     *   console.log('Amount before discount: $' + amount);
     *   console.log('Discount: $' + discount);
     *   console.log('Amount after discount: $' + finalAmount);
     *   console.log(''); // Add an empty line for separation
     * });
     */

    // *****Completed

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    let books = [
        {title: 'The Salmon of Doubt', author: {firstName: 'Douglas', lastName: 'Adams'} },
        {title: 'Walkaway', author: {firstName: 'Cory', lastName: 'Doctorow'} },
        {title: 'A Brief History of Time', author: {firstName: 'Stephen', lastName: 'Hawking'} },
    ];

    books.forEach(function(book, index) {
        console.log('Book # ' + (index + 1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
        console.log('---');
    });

    //See Steve's Github notes**








    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// })();
