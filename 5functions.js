// 1. Function Declaration
// A basic function definition that can be called by its name.
// function greet() {
//     console.log("Hello, world!");
// }

// greet(); // Output: Hello, world!

// 2. Function Expression
// A function assigned to a variable. Can be anonymous or named.
// const greet = function() {
//     console.log("Hello from function expression!");
// };

// greet(); // Output: Hello from function expression!

// 3. Arrow Functions
// Shorter syntax for function expressions, commonly used in modern JavaScript.
// const add = (a, b) => a + b;
// console.log(add(3, 4)); // Output: 7
// For functions with no parameters:
// const sayHi = () => console.log("Hi!");
// sayHi(); // Output: Hi!

// 4. Function with Parameters
// Functions can accept parameters (arguments).
// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(3, 5)); // Output: 15

// 5. Returning a Value from a Function
// Functions can return values using the return keyword.
// function square(num) {
//     return num * num;
// }

// let result = square(4);
// console.log(result); // Output: 16

// 6. Anonymous Functions
// Functions without a name, often used as arguments.
// setTimeout(function() {
//     console.log("This is an anonymous function!");
// }, 1000); // Output: This is an anonymous function! after 1 second

// 7. Immediately Invoked Function Expression (IIFE)
// A function that runs as soon as it is defined.
// (function() {
//     console.log("IIFE executed immediately!");
// })(); // Output: IIFE executed immediately!

// 8. Default Parameters
// You can provide default values for parameters.
// function greet(name = "Guest") {
//     console.log("Hello, " + name);
// }

// greet(); // Output: Hello, Guest
// greet("Alice"); // Output: Hello, Alice

// 9. Rest Parameters (...args)
// Allows a function to accept an arbitrary number of arguments as an array.
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(5, 10, 15, 20)); // Output: 50

// 10. Callback Functions
// Functions passed as arguments to other functions, usually to handle asynchronous operations.
// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched!");
//         callback();
//     }, 1000);
// }

// fetchData(() => {
//     console.log("Callback executed after fetching data!");
// });
// // Output: Data fetched! (after 1 second), Callback executed after fetching data!

// 11. Higher-Order Functions
// Functions that take other functions as arguments or return functions.
// function createMultiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }

// const multiplyBy2 = createMultiplier(2);
// console.log(multiplyBy2(5)); // Output: 10

// 12. Anonymous Arrow Functions as Callbacks
// Arrow functions are commonly used as callbacks.
// setTimeout(() => {
//     console.log("Arrow function callback executed!");
// }, 2000); // Output: Arrow function callback executed! (after 2 seconds)

// 13. Function Constructor
// A more advanced way to create functions using the Function constructor.
// const greet = new Function('name', 'console.log("Hello, " + name);');
// greet("Bob"); // Output: Hello, Bob

// 14. Recursive Functions
// A function that calls itself. Useful for problems like factorials or tree traversal.
// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120

// 15. Method Inside an Object
// Functions can also be methods of objects.
// const person = {
//     name: "John",
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// };

// person.greet(); // Output: Hello, John

// 16. Arrow Functions and this Binding
// Arrow functions do not have their own this, they inherit it from the surrounding context.
// const person = {
//     name: "Alice",
//     greet: () => {
//         console.log("Hello, " + this.name); // `this` will refer to the global object, not `person`
//     }
// };

// person.greet(); // Output: Hello, undefined (because `this` is not bound to `person`)

// 17. Function Call Method (call, apply, bind)
// You can control the value of this with call, apply, and bind.
// function greet() {
//     console.log("Hello, " + this.name);
// }

// const person1 = { name: "Alice" };
// greet.call(person1); // Output: Hello, Alice (using `call`)

// const person2 = { name: "Bob" };
// greet.apply(person2); // Output: Hello, Bob (using `apply`)

// const greetBob = greet.bind(person2);
// greetBob(); // Output: Hello, Bob (using `bind`)
