// 1. for Loop
// Used when the number of iterations is known.
// for (let i = 0; i < 5; i++) {
//     console.log("for loop iteration:", i); // Output: 0, 1, 2, 3, 4
// }

// 2. while Loop
// Executes as long as the condition is true.
// let count = 0;
// while (count < 3) {
//     console.log("while loop iteration:", count); // Output: 0, 1, 2
//     count++;
// }

// 3. do...while Loop
// Executes the block at least once, then continues as long as the condition is true.
// let num = 0;
// do {
//     console.log("do...while loop iteration:", num); // Output: 0
//     num++;
// } while (num < 1);

// 4. for...of Loop
// Iterates over iterable objects like arrays or strings.
// let fruits = ["Apple", "Banana", "Cherry"];
// for (let fruit of fruits) {
//     console.log("for...of loop fruit:", fruit); // Output: Apple, Banana, Cherry
// }
// let word = "JavaScript";
// for (let char of word) {
//     console.log("for...of loop character:", char); // Output: J, a, v, a, S, c, r, i, p, t
// }

// 5. for...in Loop
// Iterates over the keys of an object (or indices of an array).
// let student = { name: "Alice", age: 20, grade: "A" };
// for (let key in student) {
//     console.log(`for...in loop key: ${key}, value: ${student[key]}`);
//     // Output: name: Alice, age: 20, grade: A
// }
// let colors = ["Red", "Green", "Blue"];
// for (let index in colors) {
//     console.log(`for...in loop index: ${index}, value: ${colors[index]}`);
//     // Output: 0: Red, 1: Green, 2: Blue
// }

// 6. break Statement
// Exits the loop immediately.
// for (let i = 0; i < 5; i++) {
//     if (i === 3) break;
//     console.log("break example:", i); // Output: 0, 1, 2
// }

// 7. continue Statement
// Skips the current iteration and moves to the next.
// for (let i = 0; i < 5; i++) {
//     if (i === 2) continue;
//     console.log("continue example:", i); // Output: 0, 1, 3, 4
// }

// 8. Array.forEach()
// Iterates through an array and applies a callback function.
// let nums = [10, 20, 30];
// nums.forEach((num, index) => {
//     console.log(`forEach example index: ${index}, value: ${num}`);
//     // Output: 0: 10, 1: 20, 2: 30
// });

// 9. map() for Transformations
// Creates a new array by applying a function to each element.
// let numbers = [1, 2, 3];
// let doubled = numbers.map((num) => num * 2);
// console.log("map result:", doubled); // Output: [2, 4, 6]

// 10. Infinite Loop Example
// Careful: Ensure you avoid infinite loops by controlling conditions properly.
// // Uncomment with caution!
// // while (true) {
// //     console.log("This will run forever...");
// // }
