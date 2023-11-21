console.log("Inside manipulating-arrays.js");


let names = [
    "Anna Conda",
    "Barb Dwyer",
    "Justin Case",
    "Al Pacino",
    "Sue Flay",
    "Lotta B. Essen",
    "Ben Dover",
    "Polly Esther",
    "Sam Sung",
    "Harry Pitts",
    "Mary Christmas",
    "Will Power"
];




// Adding to Arrays

// names = [
//     ...names,
//     "Sue Perman"
// ];
// console.log(names);

// console.log(names.push("Sue Perman"));
// const newNamesLength = names.unshift("Sue Perman");
// console.log(newNamesLength);






// Removing from Arrays


// console.log(names);
// names.shift();
// console.log(names);

// console.log(names.pop());
// console.log(names.shift());






// Locating Array Items

// names.push("Al Pacino");
// console.log(names.indexOf("Al Pacino"));
// console.log(names.lastIndexOf("Al Pacino"));





// SLICING

// const slicedNames = names.slice(0, 2);
// console.log(slicedNames);
// console.log(names);
//
//
// const alPacinoIndex = names.indexOf("Al Pacino");
// console.log(names.slice(alPacinoIndex, alPacinoIndex + 3));


// console.log(names.slice(6));





// Ordering Arrays

// const namesCopy = [...names];
// const reversedNames = [...names].reverse();
// console.log(reversedNames);
// console.log(names);


// console.log(names.sort());




let numberArray = [
    543,
    7891,
    2345,
    10000,
    456,
    8765,
    1234,
    789,
    5678,
    234,
    9876,
    4321,
    987,
    5432,
    876,
    123,
    7890,
    3456,
    8765,
    2345
];

// This sorts in a strange way
// console.log(numberArray.sort());


// function numericalAscending(a, b) {
//     return a-b;
// }

// const sortedNumbers = numberArray.sort(function(a, b) {
//     return a-b;
// }).reverse();
// console.log(sortedNumbers)





// Converting between Arrays and Strings

// const namesString = names.join(" | ");
// console.log(namesString);
// // console.log(names);
//
// const newArray = namesString.split(" | ")
// console.log(newArray);
//
// const someString = "Hello there!";
// console.log(someString.split(""));






// Remember that sometimes arrays can affect others

// const newArray = [...names];
// newArray.sort();
//
// console.log(names);

