console.log("Inside Challenges")

// console.log(10 % 3)


// var i = 0;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

//
// band.shred = function() {
//     console.log('RAAAAAAAAAA!!!!');
// }


// let band =
// band.genre = "Metal";
// console.log(genre)
//
//
// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

//
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//
// -- Create a English-to-Pig-Latin Translator
//
// Allow the user to enter a sentence in a prompt. Take the user input and translate each word into the Pig Latin equivalent.
//
//     To convert a word to Pig Latin, follow these rules:
//
// 1. If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
//      Example: Happy = appyh + ay = appyhay
//
//
// 2. If a word starts with two consonants move the two consonants to the end of the word and add "ay."
//      Example: Child = Ildch + ay = Ildchay
//
//
// 3. If a word starts with a vowel add the word "way" at the end of the word.
//     Example: Awesome = Awesome +way = Awesomeway

// English-to-Pig-Latin Translator

function translateToPigLatin(sentence) {
    const words = sentence.split(" ");
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return words.map(word => {
        if ((vowels.includes(word[0].toLowerCase()))) {
            return word + "way";
        } else if (!vowels.includes(word[1].toLowerCase())) {
            return word.substring(2) + word.substring(0, 2) + "ay";
        } else {
            return word.substring(1) + word[0] + "ay";
        }
    }).join(" ");
}

let sentence = prompt("Enter a sentence");
let translatedSentence = translateToPigLatin(sentence);

alert(translatedSentence);


**************************