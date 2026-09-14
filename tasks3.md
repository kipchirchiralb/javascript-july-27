Tasks 3
These tasks build on Tasks 2. You still need variables, operators, loops, conditions, functions, and objects — but now you also use the built-in string, array, and Math methods we covered in datatypes.js.

Each question ends with a hint telling you which method(s) to reach for.

Question 1 Write a function convertCurrency(amount, currency) that converts an amount in Kenyan shillings to "dollar", "euro" or "yen" (rates: 1 KES = 0.0077 USD, 0.0069 EUR, 0.85 JPY). The currency the user types may come in as "Dollar", " EURO " or "Yen", so clean it up before comparing. Return the result rounded to 2 decimal places, e.g. "1000 KES = 7.70 USD". Use USD, EUR and JPY in the returned message. If the currency is not one of the three, return "Unsupported currency". Hint: trim(), toLowerCase(), toFixed(2).

Question 2 Write a function gradeStudent(name, marks) that returns a grade using the Tasks 2 rules (80–100 = A, 60–79 = B, 50–59 = C, 40–49 = D, below 40 = E) and returns "Invalid marks" for marks below 0 or above 100. The returned message must show the student's name in capitals and their initial, e.g. "ALBERT (A) scored 85 - Grade A". Hint: toUpperCase(), charAt(0).

Question 3 Write a function fizzBuzzList() that loops from 1 to 50 and instead of printing each value, pushes it into an array ("Fizz", "Buzz", "FizzBuzz", or the number). For multiples of both 3 and 5, push "FizzBuzz"; for multiples of only 3, push "Fizz"; for multiples of only 5, push "Buzz"; otherwise push the number. At the end, return the whole thing as one string separated by " | ". The returned string must start with "1 | 2 | Fizz" and end with "FizzBuzz". Call the function and log its returned string. Hint: push(), join(" | ").

Question 4 Write a function biggestNumber(numbers) that takes a non-empty array of numbers and returns the largest one, the smallest one, and the difference between them, as an object like { largest: 45, smallest: 2, range: 43 }. Do it in two ways: first with a loop and comparisons, then a second version using a Math method directly on the array with the spread operator. Hint: Math.max(...numbers), Math.min(...numbers).

Question 5 Create an object product with name, price, quantity and inStock. Write a function describeProduct(product) that returns an object with `totalCost` (`price * quantity`) and `stockMessage` (`"In stock"` or `"Out of stock"`). Then write a second function productSummary(product) that returns every property name and its value as one readable string, e.g. "name: remote, price: 1500, quantity: 3, inStock: true" — build it by looping over the object's keys. Hint: Object.keys(), Object.values(), join(", ").

Question 6 Write a function searchColor(colors, color) that takes an array of colors and a colour to look for. If the colour exists, return `"yellow found at position 1"`, using a zero-based index. If not, return `"red is not in the list"`. Normalize both the search value and every color in the array so the search ignores case and extra spaces. Hint: trim(), toLowerCase(), includes(), indexOf().

Question 7 Write a function maskPhone(phone) that takes a Kenyan phone number as a string like "0712345678" and returns "0712\*\*\*678" — the first 4 characters, three stars, then the last 3 characters. If the number is not exactly 10 characters long, return "Invalid phone number". Hint: length, slice(0, 4), slice(-3), repeat(3).

Question 8 Write a function initials(fullName) that takes a full name like " albert kipchirchir langat " and returns the initials in capitals separated by dots, e.g. "A.K.L". Remove leading, trailing, and repeated spaces before splitting the name into words. Then loop through the words and take the first letter of each. For an empty or whitespace-only name, return an empty string. Hint: trim(), split(" "), charAt(0), toUpperCase(), join(".").

Question 9 Write a function rollDice(rounds) that simulates rolling a six sided die the given positive whole number of rounds. Each roll must be a whole number from 1 to 6. Store every roll in an array, then return an object with the array of rolls, the total, and the average rounded to 1 decimal place. If rounds is not a positive whole number, return "Invalid rounds". Hint: Math.random(), Math.floor(), push(), toFixed(1).

Question 10 Write a function receipt(items) that takes an array of product objects (each with name and price) and returns a printed receipt. Sort the product objects by price from lowest to highest so each name stays paired with its price. Each item line should show the name padded to 15 characters followed by the price formatted to 2 decimal places. End with a `TOTAL` line containing the sum of all prices, also formatted to 2 decimal places. Hint: sort(), padEnd(15), toFixed(2), join("\n").
