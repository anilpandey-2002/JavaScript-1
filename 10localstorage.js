// 1. Storing Data:
// You can store data in localStorage using localStorage.setItem(key, value).
// // Storing a simple string
// localStorage.setItem('username', 'JohnDoe');

// // Storing a number (converted to string)
// localStorage.setItem('age', 30);

// // Storing an object (first need to convert it to a string)
// const user = { name: 'Jane', age: 25 };
// localStorage.setItem('user', JSON.stringify(user));

// console.log('Data Stored');

// 2. Retrieving Data:
// You can retrieve data using localStorage.getItem(key).
// // Retrieving a string
// const username = localStorage.getItem('username');
// console.log(username); // Output: JohnDoe

// // Retrieving a number (stored as a string)
// const age = localStorage.getItem('age');
// console.log(age); // Output: 30 (as string)

// // Retrieving and parsing an object
// const storedUser = JSON.parse(localStorage.getItem('user'));
// console.log(storedUser); // Output: { name: 'Jane', age: 25 }

// 3. Checking if Data Exists:
// Before retrieving, you can check if the key exists.
// if (localStorage.getItem('username')) {
//     console.log('Username exists:', localStorage.getItem('username'));
// } else {
//     console.log('Username not found');
// }

// 4. Removing Data:
// To remove specific data, use localStorage.removeItem(key).
// localStorage.removeItem('age'); // Removes the 'age' item
// console.log('Age Removed');

// 5. Clearing All Data:
// To clear all data in localStorage, use localStorage.clear().
// localStorage.clear(); // Clears all key-value pairs
// console.log('All data cleared');
