// Declaring strings
const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);


// Single quotes, double quotes, and backticks
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);


// Embedding JavaScript
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you ?";
const joined = `${one} ${two}`;
console.log(joined);


// Concatenation using "+"
const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // "Hello, Bob"

// This one usually give you more readable code:
const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); // "Howdy, Ramesh"


// Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."



// Multiline strings
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);

/*
One day you finally knew
what you had to do, and began,
*/


// Including quotes in strings
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


// Numbers vs. strings
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

