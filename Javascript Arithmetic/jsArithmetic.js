console.log("The postfix and prefix forms: ")

let a = 1, b = 1;

let c = ++a; // prefix form returns the new value
let d = b++; // postfix form returns the old value

console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1

console.log("Assignment Result: ")

a = 2;
let x = 1 + (a *= 2);
console.log(a); // 4
console.log(x); // 5

/* Type conversions */

"" + 1 + 0 // "10" (string).  The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
"" - 1 + 0 // -1. The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
true + false // 1 (true = 1, false = 0)
6 / "3" // 3
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9   5"  The addition with a string appends the number 5 to the string.
"  -9  " - 5 // -14  The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null + 1 // 1 . null becomes 0 after the numeric conversion
undefined + 1 // NaN. undefined becomes NaN after the numeric conversion.
" \t \n" - 2 // -2

/* Fix the addition. It should be 3 */

let firstNum = prompt("First number?", 1);
let secondNum = prompt("Second number?", 2);

alert(firstNum + secondNum); // 12
/* Fix */
alert(+firstNum + +secondNum)

/* or
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2); 
*/