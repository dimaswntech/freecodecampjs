let yourArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ],
    [
        {
            a: true,
            b: false
        },
        {
            c: false,
            d: true
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ],
    true,"man", 1

]; // Change this line

//10

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1]="q"
// Only change code above this line
console.log(myArray);

//10

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift("I", 2, "three")
    arr.push(7, "VIII", 9)
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//10

function popShift(arr) {
    let popped = arr.pop() ; // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//10

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,1)
arr.splice(3,4)
// Only change code above this line
console.log(arr);

//10

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,"DarkSalmon", "BlanchedAlmond")
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//10

function forecast(arr) {
    // Only change code below this line
    let arrSlice = arr.slice(2,4)
    return arrSlice;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//10

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr])
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

//10

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence;
}

console.log(spreadOut());

//10

function quickCheck(arr, elem) {
    // Only change code below this line
    let search = arr.indexOf(elem)
    return search>=0?true:false
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//10

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        let search
        search = arr[i].indexOf(elem)
        if (search < 0) {
            newArr.push([...arr[i]])
        }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//10

let myNestedArray = [
    // Only change code below this line
    [

    ],
    [
        ['deep']
    ],
    [
        [
            ['deeper']
        ],
        [
            [
                ['deepest']
            ]
        ]
    ]
    // Only change code above this line
];

//10

const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13
foods.grapes = 35
foods.strawberries = 27
// Only change code above this line

console.log(foods);

//10

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only change code below this line
userActivity.data.online = 45
// Only change code above this line

console.log(userActivity);

//10

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
}

console.log(checkInventory("apples"));

//10

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only change code below this line
delete foods.oranges
delete foods.plums
delete foods.strawberries
// Only change code above this line

console.log(foods);

//10

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    return [
        'Alan',
        'Jeff',
        'Sarah',
        'Ryan'
    ].every(i => userObj.hasOwnProperty(i));
    // Only change code above this line
}

console.log(isEveryoneHere(users));

//10

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    // Only change code below this line
    let result = 0;
    for (let user in allUsers) {
        if (allUsers[user].online === true) {
            result++;
        }
    }
    return result;
    // Only change code above this line
}

console.log(countOnline(users));

//10

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
}

console.log(getArrayOfUsers(users));

//10

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    let fren = userObj.data.friends
    fren.push(friend)
    return fren
    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));