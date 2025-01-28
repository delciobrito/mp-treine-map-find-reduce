import { drinks } from "../data.js";

const fruits = document.querySelector("#fruta");
const distilleds = document.querySelector("#destilado");
const buttonDrinksCreator = document.querySelector("#criarDrink");
const drink = document.querySelector("#resultado");

buttonDrinksCreator.addEventListener("click", () => {
  let fruit = fruits.value;
  let distilled = distilleds.value;

  drinksCreator(fruit, distilled);
});

function drinksCreator(fruit, distilled) {
  if (fruit != "" && distilled != "") {
    drink.innerHTML = `
                        <h1>Bebida pronta<h1/>
                    `;
  } else {
    drink.innerHTML = `
                        <h1>Falta um ingrediente<h1/>
                    `;
  }
}

console.log(drinks);
