// 1. Creating an Array
// You can create an array using either square brackets [] or the Array constructor.
// // Using array literal
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// // Using Array constructor
// let numbers = new Array(1, 2, 3);
// console.log(numbers); // Output: [1, 2, 3]

// 2. Array Accessing Elements
// Access elements using zero-based indexing.
// let colors = ["Red", "Green", "Blue"];
// console.log(colors[0]); // Output: Red
// console.log(colors[1]); // Output: Green

// 3. push() Method
// Adds one or more elements to the end of an array.
// let animals = ["Cat", "Dog"];
// animals.push("Elephant");
// console.log(animals); // Output: ["Cat", "Dog", "Elephant"]

// 4. pop() Method
// Removes the last element from an array and returns it.
// let animals = ["Cat", "Dog", "Elephant"];
// let removed = animals.pop();
// console.log(removed); // Output: Elephant
// console.log(animals); // Output: ["Cat", "Dog"]

// 5. shift() Method
// Removes the first element from an array and returns it.
// let fruits = ["Apple", "Banana", "Cherry"];
// let removed = fruits.shift();
// console.log(removed); // Output: Apple
// console.log(fruits); // Output: ["Banana", "Cherry"]

// 6. unshift() Method
// Adds one or more elements to the beginning of an array.
// let vegetables = ["Carrot", "Potato"];
// vegetables.unshift("Tomato");
// console.log(vegetables); // Output: ["Tomato", "Carrot", "Potato"]

// 7. concat() Method
// Merges two or more arrays into a new array.
// let array1 = [1, 2];
// let array2 = [3, 4];
// let merged = array1.concat(array2);
// console.log(merged); // Output: [1, 2, 3, 4]

// 8. join() Method
// Joins all elements of an array into a string, with a specified separator.
// let words = ["Hello", "World"];
// let sentence = words.join(" ");
// console.log(sentence); // Output: "Hello World"

// 9. slice() Method
// Returns a shallow copy of a portion of an array.
// let numbers = [1, 2, 3, 4, 5];
// let subArray = numbers.slice(1, 4);
// console.log(subArray); // Output: [2, 3, 4]

// 10. splice() Method
// Adds/removes elements from any position in the array.
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1, "a", "b");
// console.log(numbers); // Output: [1, 2, "a", "b", 4, 5]

// 11. forEach() Method
// Executes a provided function once for each array element.
// let colors = ["Red", "Green", "Blue"];
// colors.forEach((color, index) => {
//     console.log(`Index ${index}: ${color}`);
//     // Output:
//     // Index 0: Red
//     // Index 1: Green
//     // Index 2: Blue
// });

// 12. map() Method
// Creates a new array by applying a function to each element.
// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6]

// 13. filter() Method
// Creates a new array with elements that pass the test in the provided function.
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// 14. reduce() Method
// Executes a reducer function on each element of the array (from left to right) to reduce it to a single value.
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 10

// 15. find() Method
// Returns the first element that satisfies the provided testing function.
// let numbers = [5, 10, 15];
// let found = numbers.find(num => num > 10);
// console.log(found); // Output: 15

// 16. indexOf() Method
// Returns the index of the first occurrence of the specified value.
// let colors = ["Red", "Green", "Blue"];
// let index = colors.indexOf("Green");
// console.log(index); // Output: 1

// 17. includes() Method
// Checks if a specific element exists in an array.
// let fruits = ["Apple", "Banana", "Cherry"];
// let hasBanana = fruits.includes("Banana");
// console.log(hasBanana); // Output: true

// 18. sort() Method
// Sorts the elements of an array in place.
// let numbers = [4, 2, 5, 1, 3];
// numbers.sort();
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 19. reverse() Method
// Reverses the order of the elements in the array.
// let colors = ["Red", "Green", "Blue"];
// colors.reverse();
// console.log(colors); // Output: ["Blue", "Green", "Red"]

// 20. fill() Method
// Fills all the elements in an array with a static value.
// let numbers = [1, 2, 3];
// numbers.fill(0);
// console.log(numbers); // Output: [0, 0, 0]

// 21. Array.isArray() Method
// Checks whether a given value is an array.
// let arr = [1, 2, 3];
// let isArray = Array.isArray(arr);
// console.log(isArray); // Output: true
