import "./styles.css";

ENTREE_DATA = [
  {
    name: "New Menu Items",
    count: 11,
    viable: true,
  },
  {
    name: "Flatbread Pizza",
    count: 6,
    viable: true,
  },
  {
    name: "Glamburgers",
    count: 13,
    viable: true,
  },
  {
    name: "Sandwiches",
    count: 7,
    viable: true,
  },
  {
    name: "Salads",
    count: 13,
    viable: true,
  },
  {
    name: "Lunch",
    count: 40,
    viable: false,
  },
  {
    name: "Specialties",
    count: 21,
    viable: true,
  },
  {
    name: "Pastas",
    count: 17,
    viable: true,
  },
  {
    name: "Fish and Seafood",
    count: 11,
    viable: true,
  },
  {
    name: "Factory Combinations",
    count: 3,
    viable: true,
  },
  {
    name: "Steaks",
    count: 5,
    viable: true,
  },
  {
    name: "Skinnylicious Salads",
    count: 4,
    viable: true,
  },
  {
    name: "Skinnylicious Specialties",
    count: 17,
    viable: true,
  },
  {
    name: "Kids Menu",
    count: 18,
    viable: false,
  },
  {
    name: "Eggs & Omelettes",
    count: 8,
    viable: true,
  },
  {
    name: "Sat and Sun Brunch",
    count: 19,
    viable: false,
  },
];
DESSERT_DATA = [
  {
    name: "Cheesecakes and Specialties",
    count: 40,
    viable: true,
  },
  {
    name: "Ice Cream Delights",
    count: 3,
    viable: true,
  },
  {
    name: "10 inch whole cheesecake",
    count: 37,
    viable: true,
  },
  {
    name: "6 and 7 inch whole cheesecake",
    count: 18,
    viable: true,
  },
];
SMALL_DISH_DATA = [
  {
    name: "Small Plates and Snacks",
    count: 14,
    viable: true,
  },
  {
    name: "Appetizers",
    count: 24,
    viable: true,
  },
  {
    name: "Side Dishes",
    count: 11,
    viable: true,
  },
  {
    name: "Skinnylicious Small Plates",
    count: 11,
    viable: true,
  },
];
DRINK_DATA = [
  {
    name: "To Go Beverages",
    count: 16,
    viable: false,
  },
  {
    name: "Frozen Drinks",
    count: 6,
    viable: true,
  },
  {
    name: "Hot Drinks and Espresso",
    count: 6,
    viable: true,
  },
  {
    name: "Specialty Drinks",
    count: 13,
    viable: true,
  },
  {
    name: "Margaritas, Mojitos, and Martinis",
    count: 11,
    viable: true,
  },
  {
    name: "All Day Morning Cocktails",
    count: 5,
    viable: true,
  },
];
import { useState } from "react";

export default function App() {
  const [entree, setEntree] = useState(null);
  const [smallDish, setSmallDish] = useState(null);
  const [drink, setDrink] = useState(null);
  const [dessert, setDessert] = useState(null);

  function pickRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function reset() {
    setEntree(null);
    setSmallDish(null);
    setDrink(null);
    setDessert(null);
  }

  function pickFood(data, setter) {
    try {
      viableFood = data.filter((data) => data.viable == true);
      randomFoodCategory = viableFood[pickRandomInt(1, viableFood.length)];
      console.log(randomFoodCategory);
      randomFoodNumber = pickRandomInt(1, randomFoodCategory.count);
      setter([randomFoodCategory.name, randomFoodNumber]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => reset()}> Reset </button>
      </div>
      <div>
        <button onClick={() => pickFood(ENTREE_DATA, setEntree)}>
          Pick Entree
        </button>
        {entree && (
          <l1>
            Pick the {entree[1]}th item from {entree[0]}
          </l1>
        )}
      </div>

      <div>
        <button onClick={() => pickFood(SMALL_DISH_DATA, setSmallDish)}>
          Pick Small Dish
        </button>
        {smallDish && (
          <l1>
            Pick the {smallDish[1]}th item from {smallDish[0]}
          </l1>
        )}
      </div>

      <div>
        <button onClick={() => pickFood(DRINK_DATA, setDrink)}>
          Pick Drink
        </button>
        {drink && (
          <l1>
            Pick the {drink[1]}th item from {drink[0]}
          </l1>
        )}
      </div>

      <div>
        <button onClick={() => pickFood(DESSERT_DATA, setDessert)}>
          Pick Dessert
        </button>
        {dessert && (
          <l1>
            Pick the {dessert[1]}th item from {dessert[0]}
          </l1>
        )}
      </div>
    </div>
  );
}
