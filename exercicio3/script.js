import { foods } from "../data.js";

const totalCalories = document.querySelector("#total-calories");
const foodItens = document.querySelector("#food-list");
const selectFoods = document.querySelector("#selected-foods");
const arrayNamesFood = [];
let sumOfCalories = [];
let currentCalories;

function cardsFood() {
  foods.map((item) => {
    const food = document.createElement("div");
    food.className = "food-item";
    food.setAttribute("data-food", item.name);
    food.innerHTML = `
            <img src = ${item.image}>
            <h2>${item.name}</h2>
            <p>Calorias: ${item.calories}</p>
        `;
    selectFoods.appendChild(food);
    foodItens.appendChild(food);
  });
}

foodItens.addEventListener("click", (e) => {
  const nameFood = e.target.dataset.food;
  const food = foods.find((food) => food.name === nameFood);
  const calories = food.calories;
  const foundName = arrayNamesFood.find((item) => item == nameFood);

  if (foundName === nameFood) {
    const item = arrayNamesFood.includes(nameFood);

    if (item) {
      const indexFood = arrayNamesFood.indexOf(nameFood);
      const indexCalories = arrayNamesFood.indexOf(nameFood);
      arrayNamesFood.splice(indexFood, 1);
      sumOfCalories.splice(indexFood, 1);

      valueCalories();
      removeItem(foundName);
    }
  } else {
    arrayNamesFood.push(nameFood);
    sumOfCalories.push(calories);

    selectItem(nameFood);
    valueCalories();
  }
});

function selectItem(nameFood) {
  const selectFood = document.createElement("div");
  const button = document.createElement("button");

  selectFood.setAttribute("data-name", nameFood);
  button.innerText = nameFood;

  selectFood.className = "selected-food";

  selectFood.appendChild(button);
  selectFoods.appendChild(selectFood);
}

function removeItem(nameFood) {
  const foundNameFood = document.querySelector(`[data-name="${nameFood}"]`);
  foundNameFood.remove();
}

function valueCalories() {
  currentCalories = sumOfCalories.reduce((currentCalorie, totalCalories) => {
    return currentCalorie + totalCalories;
  }, 0);
  totalCalories.innerText = `
    ${currentCalories}
  `;
}

cardsFood();
