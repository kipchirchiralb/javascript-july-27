//data a seedlings farm
const seedlingsFarm = {
  farmName: "Mti Moja Seedlings",
  location: "Eldoret, Kenya",
  isRegistered: true,
  owner: {
    name: "Ken Towett",
    contact: "ken.towett@gmail.com",
    age: 35,
  },
  services: [
    "seedlings sales",
    "nursery management",
    "agricultural consultancy",
  ],
  seedlings: [
    {
      type: "Mango",
      quantity: 100,
      unitPrice: 50,
      isGrafted: false,
      species: {
        name: "Alphonso",
        origin: "India",
      },
    },
    {
      type: "Avocado",
      quantity: 200,
      unitPrice: 30,
      isGrafted: false,
      species: {
        name: "Hass",
        origin: "Mexico",
      },
    },
    {
      type: "Passion Fruit",
      quantity: 150,
      unitPrice: 20,
      isGrafted: true,
      species: {
        name: "Golden Passion",
        origin: "Kenya",
      },
    },
  ],
};

console.log(seedlingsFarm.owner.contact);
console.log(seedlingsFarm.services[2]);
// Accessing nested data tasks - print the exact value of the following questions
// how old is the owner of the farm?
// how many seedling varieties are there in the farm?
// how many seedlings are there in total? - all varieties
// what is the total value of all seedlings in the farm?
// is the farm registered?
