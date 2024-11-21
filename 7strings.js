// 1. Creating a String
// let str1 = "Hello, World!";   // Using double quotes
// let str2 = 'JavaScript is fun'; // Using single quotes
// let str3 = `Template literals`; // Using backticks

// 2. String Length
// let str = "Hello";
// console.log(str.length);  // Output: 5 (length of the string)

// 3. Accessing Characters
// let str = "Hello";
// console.log(str[0]);      // Output: H (Access character by index)
// console.log(str.charAt(1)); // Output: e (Access character using charAt)

// 4. String Methods: toLowerCase() and toUpperCase()
// let str = "JavaScript";
// console.log(str.toLowerCase());  // Output: javascript
// console.log(str.toUpperCase());  // Output: JAVASCRIPT

// 5. String Methods: concat()
// let str1 = "Hello";
// let str2 = "World";
// let result = str1.concat(", ", str2, "!");
// console.log(result);  // Output: Hello, World!

// 6. String Methods: includes()
// Checks if a substring exists within the string.

// let str = "JavaScript is fun!";
// console.log(str.includes("fun"));  // Output: true
// console.log(str.includes("Python")); // Output: false

// 7. String Methods: indexOf()
// Finds the index of the first occurrence of a substring.

// let str = "Hello, JavaScript!";
// console.log(str.indexOf("JavaScript"));  // Output: 7 (index of the substring)
// console.log(str.indexOf("Python"));      // Output: -1 (not found)

// 8. String Methods: slice()
// Extracts a section of a string.

// let str = "JavaScript";
// console.log(str.slice(0, 4));   // Output: Java (substring from index 0 to 4)
// console.log(str.slice(-6));      // Output: Script (last 6 characters)

// 9. String Methods: substring()
// Similar to slice(), but doesn't support negative indexes.

// let str = "JavaScript";
// console.log(str.substring(0, 4));  // Output: Java
// console.log(str.substring(4, 0));  // Output: Java (reversed order gives the same result)

// 10. String Methods: replace()
// Replaces the first occurrence of a substring.

// let str = "I love JavaScript";
// let newStr = str.replace("JavaScript", "React");
// console.log(newStr);  // Output: I love React

// 11. String Methods: split()
// Splits a string into an array of substrings based on a separator.

// let str = "apple,banana,orange";
// let fruits = str.split(",");
// console.log(fruits);  // Output: ["apple", "banana", "orange"]

// 12. String Methods: trim()
// Removes whitespace from both ends of a string.

// let str = "  Hello World!  ";
// console.log(str.trim());  // Output: Hello World!

// 13. String Methods: repeat()
// Repeats the string a specified number of times.

// let str = "Hi! ";
// console.log(str.repeat(3));  // Output: Hi! Hi! Hi!

// 14. String Methods: startsWith() and endsWith()
// Checks if the string starts or ends with a specified substring.

// let str = "Hello, JavaScript!";
// console.log(str.startsWith("Hello")); // Output: true
// console.log(str.endsWith("JavaScript!")); // Output: true

// 15. String Methods: match()
// Searches for a match using a regular expression.

// let str = "The price is $100";
// let result = str.match(/\d+/);  // Match any sequence of digits
// console.log(result);  // Output: ["100"]

// 16. String Methods: padStart() and padEnd()
// Pads the string to a given length with a specified string.

// let str = "5";
// console.log(str.padStart(3, "0"));  // Output: 005 (pads at the start)
// console.log(str.padEnd(3, "0"));    // Output: 500 (pads at the end)

// 17. String Methods: toString()
// Converts other data types to a string.

// let num = 123;
// let str = num.toString();
// console.log(str);  // Output: "123"

// 18. Template Literals
// Allows embedding expressions inside strings.

// let name = "Alice";
// let age = 25;
// let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(greeting);  // Output: Hello, my name is Alice and I am 25 years old.
