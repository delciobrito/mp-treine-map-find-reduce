import { drinks } from "../data.js";

const fruits = document.querySelector("#fruta");
const distilleds = document.querySelector("#destilado");
const buttonDrinksCreator = document.querySelector("#criarDrink");
const drinkResult = document.querySelector("#resultado");

buttonDrinksCreator.addEventListener("click", () => {
  let fruit = fruits.value;
  let distilled = distilleds.value;

  drinksCreator(fruit, distilled);
});

function drinksCreator(fruit, distilled) {

  if (fruit !== "" && distilled !== "") {
    const found = drinks.find(
      (drink) => drink.fruta === fruit && drink.destilado === distilled
    );

    drinkResult.innerHTML = "";
    drinkResult.innerHTML = `
      <h2> Nome: ${found.nome}<h2/>
      <p>Descrição: ${found.descricao} <p/>
    `;
  } else if (fruit !== "" && distilled === "") {
    drinkResult.innerHTML = `
                        <h1>Por favor escolha um destilado!<h1/>
                    `;
  } else if (fruit === "" && distilled !== "") {
    drinkResult.innerHTML = `
                        <h1>Por favor escolha uma fruta!<h1/>
                    `;
  } else if (fruit === "" && distilled === ""){
    drinkResult.innerHTML = `
                        <h1>Por favor escolha os ingredientes!<h1/>
                    `;
  }
}
