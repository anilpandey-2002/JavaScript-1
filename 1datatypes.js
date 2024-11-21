// 1. Primitive Data Types

// 1.1. Number
// Represents both integers and floating-point numbers.
// let age = 25; // Integer
// let price = 99.99; // Floating-point
// console.log(typeof age); // Output: number
// console.log(typeof price); // Output: number

// 1.2. String
// Used to represent text.
// let name = "John"; // Double quotes
// let greeting = 'Hello'; // Single quotes
// let message = `Welcome, ${name}!`; // Template literals
// console.log(typeof name); // Output: string
// console.log(message); // Output: Welcome, John!

// 1.3. Boolean
// Represents true or false.
// let isLoggedIn = true;
// let hasPermission = false;
// console.log(typeof isLoggedIn); // Output: boolean

// 1.4. Undefined
// A variable that is declared but not initialized.
// let data;
// console.log(data); // Output: undefined
// console.log(typeof data); // Output: undefined

// 1.5. Null
// Represents an intentional absence of value.
// let result = null;
// console.log(result); // Output: null
// console.log(typeof result); // Output: object (this is a known quirk in JavaScript)

// 1.6. Symbol
// Used to create unique identifiers.
// let sym1 = Symbol("id");
// let sym2 = Symbol("id");
// console.log(sym1 === sym2); // Output: false
// console.log(typeof sym1); // Output: symbol

// 1.7. BigInt
// Used for numbers larger than Number.MAX_SAFE_INTEGER.
// let bigNum = 123456789012345678901234567890n; // Add `n` at the end
// console.log(bigNum); // Output: 123456789012345678901234567890n
// console.log(typeof bigNum); // Output: bigint

// 2. Non-Primitive (Reference) Data Types

// 2.1. Object
// Used to store collections of key-value pairs.
// let person = { name: "Alice", age: 30 };
// console.log(person.name); // Output: Alice
// console.log(typeof person); // Output: object

// 2.2. Array
// Special type of object used to store ordered lists.
// let numbers = [1, 2, 3, 4];
// console.log(numbers[0]); // Output: 1
// console.log(typeof numbers); // Output: object

// 2.3. Function
// A reusable block of code.
// function greet() {
//     return "Hello!";
// }
// console.log(greet()); // Output: Hello!
// console.log(typeof greet); // Output: function

// 2.4. Date
// Used to handle dates and times.
// let now = new Date();
// console.log(now); // Output: Current date and time
// console.log(typeof now); // Output: object

// 2.5. RegExp
// Regular expressions for pattern matching.
// let pattern = /hello/i;
// console.log(pattern.test("Hello, world!")); // Output: true
// console.log(typeof pattern); // Output: object

// 3. Special Cases

// 3.1. NaN (Not a Number)
// Represents an invalid number.
// let result = "abc" * 2;
// console.log(result); // Output: NaN
// console.log(typeof result); // Output: number

// 3.2. Infinity and -Infinity
// Represents values beyond the number range.
// console.log(1 / 0); // Output: Infinity
// console.log(-1 / 0); // Output: -Infinity
// console.log(typeof Infinity); // Output: number

// 4. Checking Data Types

// 4.1. typeof Operato
// console.log(typeof 42); // Output: number
// console.log(typeof "Hello"); // Output: string

// 4.2. instanceof Operato
// let arr = [];
// console.log(arr instanceof Array); // Output: true
// This covers all JavaScript data types practically!
