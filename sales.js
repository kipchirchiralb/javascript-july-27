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

function findWeeklyTotal(sales) {
  let total = 0;
  for (let index = 0; index < sales.length; index++) {
    total = total + sales[index].price * sales[index].quantity;
  }
  return total;
}
console.log(findWeeklyTotal(sales));

// write two functions
// bestSeller — the item name with the highest total quantity sold.
// topEarner — the item name that brought in the most money. Notice it is not the same item as