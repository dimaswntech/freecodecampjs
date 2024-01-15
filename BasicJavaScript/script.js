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

console.log("Store Multiple Values in one Variable using JavaScript Arrays")
// Only change code below this line
const myArray = ["one", 1];

console.log("Nest one Array within Another Array\n")
// Only change code below this line
const myArray = [["one", 1], ["two", 2]];

console.log("Access Array Data With Indexes\n")
const myArray = [50, 60, 70];
let myData = myArray[0]

console.log("Modify Array Data With Indexes\n")
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45

console.log("Access Multi-Dimensional Arrays With Indexes\n")
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

console.log("Manipulate Arrays With push Method")
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])

console.log("Manipulate Arrays With pop Method")
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop()

console.log("Manipulate Arrays With shift Method")
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift()

console.log("Manipulate Arrays With unshift Method")
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])

console.log("Shopping List")
const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];

console.log("Write Reusable JavaScript with Functions")
function reusableFunction(){
    console.log("Hi World")
}
reusableFunction()

console.log("Passing Values to Functions with Arguments\n")
function functionWithArgs(a,b){
    console.log(a+b)
}

functionWithArgs(1,2)
functionWithArgs(7,9)

console.log("Return a Value from a Function with Return")
function timesFive(a){
    return a*5
}

console.log("Global Scope and Functions")
// Declare the myGlobal variable below this line
let myGlobal = 10;
let oopsGlobal
function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = myGlobal/2
}

// Only change code above this line

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

console.log("Local Scope and Functions")
function myLocalScope() {
    // Only change code below this line
    let myVar = 10
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myLocalScope);

console.log("Global vs. Local Scope in Functions")
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    let outerWear = "sweater"
    // Only change code above this line
    return outerWear;
}

myOutfit();

console.log("Understanding Undefined Value returned from a Function\n")
// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum+=5
}

// Only change code above this line

addThree();
addFive();

console.log("Assignment with a Returned Value\n")
// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed =  processArg(7)

console.log("Stand in Line")
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var removed = arr.shift();
    return removed;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log("Understanding Boolean Values")
function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}

console.log("Use Conditional Logic with If Statements")
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){
        return "Yes, that was true"
    }else{
        return "No, that was false"
    }


    // Only change code above this line

}

console.log("Comparison with the Equality Operator")
// Setup
function testEqual(val) {
    if (val==12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

console.log("Comparison with the Strict Equality Operator")
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

console.log("Practice comparing different values")
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

console.log("Comparison with the Inequality Operator")
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

console.log("Comparison with the Strict Inequality Operator")
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

console.log("Comparison with the Greater Than Operator")
function testGreaterThan(val) {
    if (val >100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

console.log("Comparison with the Greater Than Or Equal To Operator")
function testGreaterOrEqual(val) {
    if (val>= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

console.log("Comparison with the Less Than Operator")
function testLessThan(val) {
    if (val <25) {  // Change this line
        return "Under 25";
    }

    if (val <55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

console.log("Comparison with the Less Than Or Equal To O")
function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val<=24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

console.log("Comparisons with the Logical And Operator\n")
function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50&&val>=25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

console.log("Comparisons with the Logical Or Operator")
function testLogicalOr(val) {
    // Only change code below this line

    if (val<10||val>20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

console.log("Introducing Else Statements")
function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }else{
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

console.log("Introducing Else If Statements")
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }else{

        return "Between 5 and 10";}
}

testElseIf(7);

console.log("Logical Order in If Else Statements")
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

console.log("Chaining If Else Statements")
function testSize(num) {
    // Only change code below this line
    if(num <5) {
        return "Tiny"
    }else if(num<10){
        return "Small"
    }else if(num<15){
        return "Medium"
    }else if(num<20){
        return "Large"
    }else{
        return "Huge"
    }

    return "Change Me";
    // Only change code above this line
}

testSize(7);

console.log("Golf Code")
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if(strokes===1){
        return "Hole-in-one!"
    }else if(strokes <=par-2){
        return "Eagle"
    }else if(strokes ===par-1){
        return "Birdie"
    }else if(strokes ===par){
        return "Par"
    }else if(strokes ===par+1){
        return "Bogey"
    }else if(strokes ===par+2){
        return "Double Bogey"
    }else{
        return "Go Home!"
    }

    return "Change Me";
    // Only change code above this line
}

golfScore(5, 4);

console.log("Selecting from Many Options with Switch Statements")
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch(val){
        case 1:
            answer = "alpha"
            break

        case 2:
            answer = "beta"
            break

        case 3:
            answer = "gamma"
            break

        case 4:
            answer = "delta"
    }

    // Only change code above this line
    return answer;
}

caseInSwitch(1);

console.log("Adding a Default Option in Switch Statements")
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case "a":
            answer = "apple"
            break

        case "b":
            answer = "bird"
            break

        case "c":
            answer = "cat"
            break

        default:
            answer = "stuff"
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);

console.log("Multiple Identical Options in Switch Statements")
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break
        case 7:
        case 8:
        case 9:
            answer = "High"
            break
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);

console.log("Replacing If Else Chains with Switch")
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case "bob":
            answer = "Marley"
            break
        case 42:
            answer = "The Answer"
            break
        case 1:
            answer = "There is no #1"
            break
        case 99:
            answer = "Missed me by this much!"
            break
        case 7:
            answer = "Ate Nine"
            break
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);

console.log("Returning Boolean Values from Functions")
function isLess(a, b) {
    // Only change code below this line
    return a<b
    // Only change code above this line
}

isLess(10, 15);

console.log("Return Early Pattern for Functions")
// Setup
function abTest(a, b) {
    // Only change code below this line

    if(a<0||b<0){
        return undefined
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

console.log("Counting Cards")
let count = 0;

function cc(card) {
    // Only change code below this line
    if(card)
    {switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count +=1
            break
        case 7:
        case 8:
        case 9:
            count +=0
            break
        default:
            count-=1
    }
        if(count >0){return count+" Bet"}
        else{return count+ " Hold"}
    }
    return "Change Me";
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log("Build JavaScript Objects")
const myDog = {
    // Only change code below this line
    name : "Wok",
    legs : 4,
    tails : 1,
    friends :["Bong"]

    // Only change code above this line
};

console.log("Accessing Object Properties with Dot Notation\n")
// Setup
const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

console.log("Accessing Object Properties with Bracket Notation")
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

console.log("Accessing Object Properties with Variables")
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line