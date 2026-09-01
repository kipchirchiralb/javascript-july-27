// Data types in javascript
// 1. Primitive data types
// Number - 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
let age = 40;
// String - "Hello", 'Hello', `Hello`
let email = "alber@eldohub.co.ke";
// Boolean - true, false
let isApproved = true;
// Undefined - a variable that has not been assigned a value
let adminEmail;
// Null - a variable that has been assigned a value of null
let finalScore = null;
// console.log(Age); // ReferenceError: Age is not defined

// 2. Non-primitive/Composite data types
//  Object - a collection of key-value pairs
const car = { color: "red", model: "Toyota", year: 2020 };
console.log(car.model); // DOT NOTATION  FOR OBJECTS

//  Array/List - a collection of values
const fruits = ["apple", "banana", "orange"];
console.log(fruits[2]); // BRACKET NOTATION FOR ARRAYS with index starting from 0

//  Function - a block of code that can be executed
function greet() {
  console.log("Hello, World!");
}
greet(); // calling the function to execute the code inside it

console.log(typeof email);
