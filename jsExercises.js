// Add two numbers together

console.log("Add two numbers:", 23+97);

// Add six numbers together
console.log("Add six numbers:", 11+22+33+44+55+66);

// Log this. Should be 0.24675 smt
console.log("More math:", (4 + 6 + 9) / 77);

console.log("----------------------------------------");

// variables
console.log("Variables test");
let a = 10;
console.log("Output a: ",a);

a = 20;
console.log("Re-asign a: ", a);

let b = 7 * a;
console.log("Output b = a*7: ",b);

console.log("----------------------------------------");
// Try this sequence
const max = 57;
const actual = max - 17 ;
const percentage = actual/max;

console.log("Output percentage: ", percentage);

// Working with variables

/* 
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let admin = "";
let name = "John";

admin = name ;
window.alert(admin);

/* Create a variable with the name of our planet. */
let ourPlanetName = "Earth";  /* It’s nice to be more verbose. */

/* Create a variable to store the name of a current visitor to a website. */
let currentUserName = "John"; /* we could shorten that to userName if we know for sure that the user is current */

/* Uppercase const */
const BIRTHDAY = '18.04.1982';
/* We generally use upper case for constants that are “hard-coded”. 
Or, in other words, when the value is known prior to execution and directly written into the code. */

const age = someCode(birthday);
/* In contrast, age is evaluated in run-time. 
Today we have one age, a year after we’ll have another one. 
It is constant in a sense that it does not change through the code execution. 
But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it. */
