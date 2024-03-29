function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//10

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7

    // Only change code above this line
}
editInPlace();

//10

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line


    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI = 3.14;
}
const PI = freezeObj();

//10

const magic = ()=> {
    return new Date();
};

//10

const myConcat = (arr1, arr2)=> {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//10

// Only change code below this line
const increment = (number = 5, value = 1) => number + value;
// Only change code above this line

//10

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

//10

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//10

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES

// Only change code above this line

//10

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES
// Only change code above this line

//10

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST;

// Only change code above this line

//10

let a = 8, b = 6;
[a,b] = [b,a]
// Only change code below this line

//10

function removeFirstTwo(list) {
    const [a,b, ...arr] = [...list]
    return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//10

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({max, min}) => {return (max+min)/2.0}
// Only change code above this line

//10

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i = 0; i< arr.length; i++){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);

//10

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
        name,
        age,
        gender
    };
    // Only change code above this line
};

//10

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//10

// Only change code below this line
class Vegetable{
    constructor (name){
        this.name = name
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//10

// Only change code below this line
class Thermostat{
    constructor(scale){
        this._scale = (5/9*(scale-32))
    }
    get temperature(){
        return this._scale
    }
    set temperature(updateScale){
        this._scale = updateScale
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//10

<html>
<body>
<!-- Only change code below this line -->
<script src="index.js" type="module"></script>
<!-- Only change code above this line -->
</body>
</html>

//10

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export {uppercaseString, lowercaseString}

//10

import {uppercaseString, lowercaseString} from "./string_functions.js"
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//10

import *as stringFunctions from "./string_functions.js"
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//10

export default function subtract(x, y) {
    return x - y;
}

//10

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

//10

const makeServerRequest = new Promise((resolve, reject)=>{})

//10

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data")
    } else {
        reject("Data not received")
    }
});

//10

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then((result)=>{
    console.log(result)
})

//10

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});