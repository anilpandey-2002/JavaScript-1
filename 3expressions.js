// 1. Assignment Expressions
// Used to assign a value to a variable.
// let x = 10; // Assignment expression
// console.log(x); // Output: 10

// 2. Arithmetic Expressions
// Used to perform mathematical operations.
// let sum = 5 + 3; // Addition
// let difference = 10 - 3; // Subtraction
// let product = 4 * 2; // Multiplication
// let quotient = 10 / 2; // Division
// let remainder = 10 % 3; // Modulus (remainder)
// let power = 2 ** 3; // Exponentiation
// console.log(sum, difference, product, quotient, remainder, power); // Output: 8, 7, 8, 5, 1, 8

// 3. Comparison Expressions
// Used to compare values.
// let a = 5;
// let b = 10;
// console.log(a == b); // Output: false (equal value comparison)
// console.log(a === b); // Output: false (equal value and type comparison)
// console.log(a != b); // Output: true (not equal)
// console.log(a !== b); // Output: true (strict not equal)
// console.log(a < b); // Output: true (less than)
// console.log(a <= b); // Output: true (less than or equal)
// console.log(a > b); // Output: false (greater than)
// console.log(a >= b); // Output: false (greater than or equal)

// 4. Logical Expressions
// Used for logical operations.
// let x = true;
// let y = false;
// console.log(x && y); // Output: false (AND)
// console.log(x || y); // Output: true (OR)
// console.log(!x); // Output: false (NOT)

// 5. Conditional (Ternary) Expression
// A shorthand for if...else.
// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // Output: Yes

// 6. Function Expressions
// A function that is assigned to a variable.
// let greet = function() {
//     return "Hello, World!";
// };
// console.log(greet()); // Output: Hello, World!

// 7. Object and Array Initialization Expressions
// Used to create objects or arrays.
// let person = { name: "Alice", age: 25 }; // Object expression
// console.log(person); // Output: { name: 'Alice', age: 25 }

// let fruits = ["Apple", "Banana", "Cherry"]; // Array expression
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 8. Template Literal Expressions
// String interpolation and multi-line strings.
// let name = "Alice";
// let greeting = `Hello, ${name}! Welcome to JavaScript.`;
// console.log(greeting); // Output: Hello, Alice! Welcome to JavaScript.

// 9. Unary Expressions
// Operations that use only one operand.
// let x = 5;
// console.log(typeof x); // Output: number (typeof expression)
// console.log(++x); // Output: 6 (increment)
// console.log(--x); // Output: 5 (decrement)
// console.log(-x); // Output: -5 (negation)
// console.log(+x); // Output: 5 (unary plus)

// 10. Short-Circuit Evaluation Expressions
// Logical expressions that "short-circuit" based on the first truthy or falsy value.
// let a = 0;
// let b = 10;
// console.log(a || b); // Output: 10 (a is falsy, so b is evaluated)
// console.log(a && b); // Output: 0 (a is falsy, short-circuits)

// 11. Destructuring Expressions
// Extracting values from arrays or objects.
// // Array destructuring
// let [first, second] = [10, 20];
// console.log(first, second); // Output: 10, 20

// // Object destructuring
// let person = { name: "Alice", age: 25 };
// let { name, age } = person;
// console.log(name, age); // Output: Alice 25

// 12. Spread and Rest Expressions
// Spreading elements of an array or object, or collecting arguments.
// // Spread (arrays)
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2); // Output: [1, 2, 3, 4, 5]

// // Rest (function arguments)
// function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10

// 13. Arrow Function Expressions
// Shorter syntax for writing functions.
// let add = (a, b) => a + b;
// console.log(add(3, 4)); // Output: 7

// 14. New Object Creation Expressions
// Using new keyword to create instances of objects.
// let date = new Date(); // Create a new Date object
// console.log(date); // Output: current date and time

// let person = new Object(); // Create a new empty object
// person.name = "John";
// person.age = 30;
// console.log(person); // Output: { name: 'John', age: 30 }

// 15. IIFE (Immediately Invoked Function Expression)
// A function that runs as soon as it is defined.
// (function() {
//     console.log("I am an IIFE!");
// })(); // Output: I am an IIFE!
