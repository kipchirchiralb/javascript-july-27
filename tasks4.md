# Tasks 4

These build on Tasks 3. Everything you already know still applies — variables, loops, conditions, functions, objects, string and Math methods — but now the looping should mostly be done by **higher order functions**: `forEach`, `map`, `filter`, `find`, `some`, `every`, `sort`, `reduce`.

- Rule for this set: if you catch yourself writing a `for` loop, ask whether an array method already does that job.
- Callbacks can be written as normal functions or arrow functions. Try both — and notice where an implicit return keeps things short.
- Each question ends with a hint telling you which method(s) to reach for.

Question 1
You are given the marks array from `hof.js`:
`const marks = [23, 44, 34, 22, 46, 80, 32, 91, 86];`
Write a function `analyseMarks(marks)` that returns an object like
`{ passed: [80, 91, 86], failed: [...], total: 458, average: 50.9, highest: 91, allValid: true }`.
"Passed" is 50 and above. `allValid` should be `true` only if every mark is between 0 and 100.
Hint: `filter()`, `reduce()`, `every()`, `Math.max(...marks)`, `toFixed(1)`.

Question 2
Take the students array below and write a function `classReport(students)` that returns an array of strings, one per student, like `"ALBERT (A) - 85"`, using the grading rules from Tasks 2 (80–100 = A, 60–79 = B, 50–59 = C, 40–49 = D, below 40 = E).
```js
const students = [
  { name: "albert", marks: 85 },
  { name: "wanjiru", marks: 47 },
  { name: "otieno", marks: 63 },
  { name: "amina", marks: 91 },
  { name: "brian", marks: 38 },
];
```
Then write `topStudent(students)` that returns the student object with the highest marks, and `whoFailed(students)` that returns just the names of those below 50.
Hint: `map()`, `toUpperCase()`, `sort()` with a callback, `filter()`.

Question 3
Write a function `receipt(items)` that takes an array of product objects (each with `name`, `price`, `quantity`) and returns a printed receipt string. Only include items whose quantity is greater than 0, sort them by line total from highest to lowest, pad each name to 15 characters so the prices line up, and end with a "TOTAL" line.
This is the Tasks 3 receipt again — rewrite it with array methods only, no `for` loop anywhere.
Hint: `filter()`, `map()`, `sort((a, b) => b - a)`, `reduce()`, `padEnd(15)`, `toFixed(2)`, `join("\n")`.

Question 4
Write your own higher order functions — do not use the built-in ones inside them:
- `myForEach(arr, callback)` — calls `callback(value, index)` for every element.
- `myFilter(arr, callback)` — returns a new array of the elements where the callback returned `true`.
- `myMap(arr, callback)` — returns a new array of whatever the callback returned.
Inside these three you may use a `for` loop, that is the whole point. Then prove they work by running them on `marks` and comparing your output with the real `filter` and `map`.
Hint: `push()`, and remember the callback is just a function you call with `callback(arr[i], i)`.

Question 5
An electronics shop's sales for one week — 30 records:
```js
const sales = [
  { day: "mon", item: "remote", price: 1500, quantity: 3 },
  { day: "mon", item: "cable", price: 300, quantity: 10 },
  { day: "mon", item: "bulb", price: 250, quantity: 12 },
  { day: "mon", item: "charger", price: 1200, quantity: 1 },
  { day: "tue", item: "remote", price: 1500, quantity: 1 },
  { day: "tue", item: "speaker", price: 4200, quantity: 2 },
  { day: "tue", item: "battery", price: 150, quantity: 20 },
  { day: "tue", item: "adapter", price: 850, quantity: 3 },
  { day: "wed", item: "adapter", price: 850, quantity: 4 },
  { day: "wed", item: "cable", price: 300, quantity: 6 },
  { day: "wed", item: "extension", price: 2000, quantity: 2 },
  { day: "wed", item: "bulb", price: 250, quantity: 8 },
  { day: "wed", item: "remote", price: 1500, quantity: 2 },
  { day: "thu", item: "remote", price: 1500, quantity: 2 },
  { day: "thu", item: "charger", price: 1200, quantity: 3 },
  { day: "thu", item: "battery", price: 150, quantity: 15 },
  { day: "thu", item: "speaker", price: 4200, quantity: 1 },
  { day: "fri", item: "cable", price: 300, quantity: 12 },
  { day: "fri", item: "extension", price: 2000, quantity: 3 },
  { day: "fri", item: "bulb", price: 250, quantity: 20 },
  { day: "fri", item: "adapter", price: 850, quantity: 2 },
  { day: "fri", item: "charger", price: 1200, quantity: 2 },
  { day: "sat", item: "speaker", price: 4200, quantity: 3 },
  { day: "sat", item: "remote", price: 1500, quantity: 4 },
  { day: "sat", item: "battery", price: 150, quantity: 30 },
  { day: "sat", item: "cable", price: 300, quantity: 15 },
  { day: "sat", item: "extension", price: 2000, quantity: 1 },
  { day: "sun", item: "bulb", price: 250, quantity: 6 },
  { day: "sun", item: "charger", price: 1200, quantity: 1 },
  { day: "sun", item: "adapter", price: 850, quantity: 1 },
];
```
Write a function `salesSummary(sales)` that returns an object with:
- `grandTotal` — total money made in the week.
- `perDay` — an object like `{ mon: 11350, tue: 15150, ... }`.
- `perItem` — an object mapping each item name to the total money it brought in.
- `bestSeller` — the item name with the highest total **quantity** sold.
- `topEarner` — the item name that brought in the most **money**. Notice it is not the same item as `bestSeller`, which is exactly why shops track both.
- `busiestDay` — the day with the highest total sales.
- `soldOnWed` — an array of the item names sold on Wednesday.
- `anyBigSale` — `true` if any single line total is above 5000.
- `quietDays` — the names of days that made less than 5000.
Hint: `reduce()` for `grandTotal`, `perDay` and `perItem`, `filter()` then `map()` for `soldOnWed`, `some()` for `anyBigSale`, and `Object.entries()` + `sort()` when you need to find the biggest key in an object you built.

Question 5b (stretch)
Build one function `report(sales)` that prints the week as a readable table — a row per day showing the day, the number of records, and the day's total, then a final row for the grand total. Reuse `salesSummary` instead of recalculating anything, and reuse the padding trick from Question 3 so the columns line up.
Hint: `Object.entries()`, `map()`, `padEnd()`, `toFixed(2)`, `join("\n")`.