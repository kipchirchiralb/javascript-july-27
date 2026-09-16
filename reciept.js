// Question 10 Write a function receipt(items) that takes an array of product objects (each with name and price) and returns a printed receipt. Sort the product objects by price from lowest to highest so each name stays paired with its price. Each item line should show the name padded to 15 characters followed by the price formatted to 2 decimal places. End with a `TOTAL` line containing the sum of all prices, also formatted to 2 decimal places. Hint: sort(), padEnd(15), toFixed(2), join("\n").
const sampleData = [
  { name: "Iphone 12", price: 40000 },
  { name: "HP Z book", price: 50500 },
  { name: "Zen ChromeBook", price: 22800 },
];

function reciept(items) {
  items = items.sort(function sortItems(a, b){return a.price - b.price});
  for (let index = 0; index < items.length; index++) {
    console.log(items[index].name + "      " + items[index].price.toFixed(2));
  }
  console.log(
    "TOTAL           " + items.reduce((total, item) => total + item.price, 0),
  );
}
// arrow funtions and callbacks
// reduce method in array - study

reciept(sampleData);
