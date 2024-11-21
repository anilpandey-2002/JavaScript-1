// 1. Creating a Date Object
// You can create a new Date object in various ways:

// let date1 = new Date();  // Current date and time
// console.log("Current date and time:", date1); // Output: Current date and time

// let date2 = new Date("2024-11-21");  // Date string
// console.log("Specific date:", date2); // Output: Thu Nov 21 2024...

// let date3 = new Date(2024, 10, 21, 14, 30, 0);  // Year, Month (0-indexed), Day, Hour, Minute, Second
// console.log("Specific date and time:", date3); // Output: Thu Nov 21 2024 14:30:00 GMT...

// 2. Getting Date Parts
// You can extract different components (like year, month, day, etc.) from a Date object:

// let now = new Date();
// console.log("Year:", now.getFullYear());   // Output: Current year (e.g., 2024)
// console.log("Month:", now.getMonth());     // Output: Month (0-11, e.g., 10 for November)
// console.log("Date:", now.getDate());       // Output: Day of the month (e.g., 21)
// console.log("Day of the week:", now.getDay()); // Output: Day of the week (0-6, e.g., 4 for Thursday)
// console.log("Hours:", now.getHours());     // Output: Current hour (0-23)
// console.log("Minutes:", now.getMinutes()); // Output: Current minute (0-59)
// console.log("Seconds:", now.getSeconds()); // Output: Current second (0-59)

// 3. Setting Date Parts
// You can set specific components of a Date object using setter methods:

// let customDate = new Date();
// customDate.setFullYear(2025);
// customDate.setMonth(4);  // May (months are 0-indexed)
// customDate.setDate(15);  // Day of the month
// console.log("Updated custom date:", customDate); // Output: A date in May 2025

// 4. Formatting Date as String
// You can convert a Date object to a string in different formats:

// let now = new Date();
// console.log("Date to String:", now.toString());  // Full string (e.g., "Thu Nov 21 2024 16:45:00 GMT...")
// console.log("Date to LocaleString:", now.toLocaleString());  // Locale-specific string (e.g., "11/21/2024, 4:45:00 PM")
// console.log("Date to ISOString:", now.toISOString());  // ISO format (e.g., "2024-11-21T16:45:00.000Z")

// 5. Date Arithmetic
// You can perform date arithmetic by adding/subtracting milliseconds, which can represent time differences:

// let now = new Date();
// let futureDate = new Date(now.getTime() + 1000 * 60 * 60 * 24);  // Adding 1 day (24 hours)
// console.log("1 day from now:", futureDate);  // Output: Current date + 1 day

// let pastDate = new Date(now.getTime() - 1000 * 60 * 60 * 24);  // Subtracting 1 day (24 hours)
// console.log("1 day ago:", pastDate);  // Output: Current date - 1 day

// 6. Comparing Dates
// You can compare two Date objects by their time value (milliseconds since 1970):

// let date1 = new Date("2024-11-21");
// let date2 = new Date("2024-11-22");

// console.log("Is date1 before date2?", date1 < date2);  // Output: true (because date1 is earlier)
// console.log("Is date1 equal to date2?", date1.getTime() === date2.getTime()); // Output: false

// 7. Getting Time in Milliseconds
// To get the number of milliseconds since January 1, 1970 (the UNIX epoch):

// let now = new Date();
// let milliseconds = now.getTime();
// console.log("Milliseconds since epoch:", milliseconds); // Output: A large number

// 8. Working with Timestamps
// You can create a date object from a timestamp or get the timestamp of a specific date:

// let timestamp = 1732804800000;  // Example timestamp (in milliseconds)
// let dateFromTimestamp = new Date(timestamp);
// console.log("Date from timestamp:", dateFromTimestamp);  // Output: Date corresponding to the timestamp

// let currentTimestamp = Date.now();  // Current timestamp in milliseconds
// console.log("Current timestamp:", currentTimestamp);  // Output: Current time in milliseconds since epoch

// 9. Handling Time Zones
// JavaScript will automatically handle local time zone based on the environment, but you can work with UTC explicitly:

// let now = new Date();
// console.log("UTC Time:", now.toUTCString());  // Output: UTC time (e.g., "Thu, 21 Nov 2024 15:45:00 GMT")

// // Getting UTC components
// console.log("UTC Year:", now.getUTCFullYear()); // Output: UTC year

// 10. Parsing Date Strings
// JavaScript can parse a date from a string:

// let dateString = "2024-11-21T14:30:00";
// let parsedDate = new Date(dateString);
// console.log("Parsed Date:", parsedDate);  // Output: Thu Nov 21 2024 14:30:00 GMT...

// 11. Date Now
// You can use Date.now() to get the current timestamp in milliseconds:

// let currentMilliseconds = Date.now();
// console.log("Current time in milliseconds:", currentMilliseconds);  // Output: Current timestamp
