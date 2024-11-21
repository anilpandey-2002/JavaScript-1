// 1. Using var (Function-scoped and can be re-declared):
// var name = "John"; // Declaring and initializing a variable
// console.log(name); // Output: John
// var name = "Doe"; // Can re-declare using 'var'
// console.log(name); // Output: Doe

// 2. Using let (Block-scoped and cannot be re-declared in the same scope):
// let age = 25; // Declaring a block-scoped variable
// console.log(age); // Output: 25
// age = 30; // Can update the value
// console.log(age); // Output: 30

// // let age = 40; // Error: Cannot re-declare 'age' in the same scope
// 3. Using const (Block-scoped and cannot be re-assigned or re-declared):
// const country = "India"; // Declaring a constant variable
// console.log(country); // Output: India
// // country = "USA"; // Error: Cannot re-assign a constant
// // const country = "Canada"; // Error: Cannot re-declare a constant

// 4. Difference Between var, let, and const in a Block Scope:
// if (true) {
//     var x = "var inside block"; // Accessible outside block
//     let y = "let inside block"; // Block-scoped
//     const z = "const inside block"; // Block-scoped
// }
// console.log(x); // Output: var inside block
// // console.log(y); // Error: y is not defined
// // console.log(z); // Error: z is not defined

// 5. Dynamic Typing in Variables:
// let dynamicVar = "Hello"; // Initially a string
// console.log(dynamicVar); // Output: Hello
// dynamicVar = 42; // Can change type to a number
// console.log(dynamicVar); // Output: 42
// dynamicVar = true; // Can change type to boolean
// console.log(dynamicVar); // Output: true
