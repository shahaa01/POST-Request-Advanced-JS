function Person(name, age) {
    this.age = age;
    this.name = name;
    this.sayHello = function() {
        console.log(`Hello ${this.name}`);
    };
};

let person1 = new Person("Aadi", 20);
let person2 = new Person("Swe", 18);

/**
 * The problem here is that - each object person1 and person2 
 * duplicates the function sayHello. The function sayHello is 
 * copied into every new object created so if 1000 object is created
 * than 1000 times the same function is copied over and over
 * again which is wasting memory - inefficient.
 * 
 * So to solve this problem - prototype comes in.
 * 
 * Prototype is a mechanism in JS which allows objects to 
 * inherit properties and methods from shared or 
 * common blueprint. 
 * 
 */

//The improved version of the above program with prototype

function People (name, age) {
    this.name = name;
    this.age = age;
}

People.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
}

let people1 = new People('Swechha', 19);
people1.sayHello();

//Now the sayHello function is not stored for each object
//rather is inherited by the objects of People and is only stored in prototype of People

//JS introduced new way to do this by introducing classes in ES6
//it still uses prototype under the hood.

/**
 * Every object in JavaScript has a prototype.
 * Prototypes help save memory by sharing methods across objects.
 * The prototype chain allows JavaScript to look up methods when 
    they are not found in an object.
 * You can modify prototypes using .prototype and 
    Object.setPrototypeOf().
 * Modern JavaScript uses classes, but they still use prototypes 
    behind the scenes.
 */


/**
 * Prototype Chaining :-
 * person1 ---> Person.prototype ---> Object.prototype ---> null
 */

/**
 * When you call people1.sayHello(), JavaScript does the following:
It first looks inside the people1 object to see if sayHello exists.
If it doesn't find it there, it checks inside the People.prototype.
If it finds it there, it executes it!
This is called Prototype Chain.
 */