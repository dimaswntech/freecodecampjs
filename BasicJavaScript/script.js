console.log("Comment Your JavaScript Code")
// You should create a // style comment that contains at least five letters.
// Waiting:You should create a /* */ style comment that contains at least five letters.

// this is comment
/* this is too */

console.log("Declare JavaScript Variables")
// You should declare myName with the var keyword, ending with a semicolon

var myName;

console.log("Storing Values with the Assignment Operator")
/* You should not change code above the specified comment.
Waiting:a should have a value of 7. */

// Setup
var a;
a = 7;
// Only change code below this line

console.log("Assigning the Value of One Variable to Another")
// You should not change code above the specified comment.
//     Waiting:b should have a value of 7.
// Waiting:a should be assigned to b with =.

// Setup
var a;
a = 7;
var b;
b = a;

// Only change code below this line

console.log("Initializing Variables with the Assignment Operator")
// You should initialize a to a value of 9.

var a = 9;

console.log("Declare String Variables")
// Waiting:myFirstName should be a string with at least one character in it.
// Waiting:myLastName should be a string with at least one character in it.
var myFirstName = "Boy";
var myLastName = "Rahardika";

console.log("Understanding Uninitialized Variables\n")
/*a should be defined and have a final value of 6.
Waiting:b should be defined and have a final value of 15.
Waiting:c should not contain undefined and should have a final value of the string I am a String!
Waiting:You should not change code below the specified comment.*/
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

console.log("Understanding Case Sensitivity in Variables")
// studlyCapVar should be defined and have a value of 10.
// Waiting:properCamelCase should be defined and have a value of the string A String.
//     Waiting:titleCaseOver should be defined and have a value of 9000.
// Waiting:studlyCapVar should use camelCase in both declaration and assignment sections.
//     Waiting:properCamelCase should use camelCase in both declaration and assignment sections.
//     Waiting:titleCaseOver should use camelCase in both declaration and assignment sections.
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

console.log("Explore Differences Between the var and let Keywords")
// var should not exist in the code.
//     Waiting:catName should be the string Oliver.
//     Waiting:catSound should be the string Meow!
let catName = "Oliver";
let catSound = "Meow!";

console.log("Declare a Read-Only Variable with the const Keyword")
// var should not exist in your code.
//     Waiting:You should change fCC to all uppercase.
//     Waiting:FCC should be a constant variable declared with const.
// Waiting:The string assigned to FCC should not be changed.
//     Waiting:fact should be declared with let.
//     Waiting:console.log should be changed to print the FCC and fact variables.
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

console.log("Add Two Numbers with JavaScript\n")
// Waiting:sum should equal 20.
// Waiting:You should use the + operator.

console.log("Add Two Numbers with JavaScript\n")
// Waiting:sum should equal 20.
// Waiting:You should use the + operator.
const sum = 10 + 10;

console.log("Subtract One Number from Another with JavaScript")
// The variable difference should be equal to 12.
// Waiting:You should only subtract one number from 45.
const difference = 45 - 33;

console.log("Multiply Two Numbers with JavaScript")
const product = 8 * 10;

console.log("Divide One Number by Another with JavaScript")
const quotient = 66 / 33;

console.log("Increment a Number with JavaScript")
let myVar = 87;

// Only change code below this line
myVar++;

console.log("Decrement a Number with JavaScript")
let myVar = 11;

// Only change code below this line
myVar--;

console.log("Create Decimal Numbers with JavaScript")
const myDecimal = 5.7;

// Only change code below this line

console.log("Multiply Two Decimals with JavaScript")
const product = 2.0 * 2.5;

console.log("Divide One Decimal by Another with JavaScript")
const quotient = 4.4 / 2.0; // Change this line

console.log("Finding a Remainder in JavaScript\n")
const remainder = 11%3;

console.log("Compound Assignment With Augmented Addition")
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

console.log("Compound Assignment With Augmented Subtraction")
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

console.log("Compound Assignment With Augmented Multiplication\n")
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

console.log("ompound Assignment With Augmented Division\n")
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

console.log("Escaping Literal Quotes in Strings\n")
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

console.log("Quoting Strings with Single Quotes\n")
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log("Escape Sequences in Strings")
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

console.log("Concatenating Strings with Plus Operator")
const myStr = "This is the start."+" This is the end."; // Change this line

console.log("Concatenating Strings with the Plus Equals Operator")
let myStr = "This is the first sentence.";
myStr += " This is the second sentence."

console.log("Constructing Strings with Variables")
// Only change code below this line
const myName = "freeCodeCamp";
const myStr = "Hello, our name is " + myName + ", how are you?";

console.log("Appending Variables to Strings")
// Change code below this line
const someAdjective = "awesome";
let myStr = "Learning to code is ";
myStr += someAdjective

console.log("Find the Length of a String")
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

console.log("Use Bracket Notation to Find the First Character in a String")
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

console.log("Understand String Immutability")
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

console.log("Use Bracket Notation to Find the Nth Character in a String")
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

console.log("Use Bracket Notation to Find the Last Character in a String")
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

console.log("Use Bracket Notation to Find the Nth-to-Last Character in a String")
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line

console.log("Word Blanks")
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =  "Once there was a " + myNoun + " which was very " + myAdjective + ". It " + myVerb + " " + myAdverb + " around the yard."; // Change this line
// Only change code above this line