import { foods } from "../data.js";

const gallery = document.getElementById("food-gallery");
const select = document.getElementById("food-filter");

select.addEventListener("change", () => {
  gallery.innerHTML = ''
  const selectedItem = select.value;
  itemFilter(selectedItem);
});

function itemFilter(params) {
  let itens = [];
  if (params == "all") {
    itens = foods;
  } else {
    itens = foods.filter((item) => item.type == params);
  }

  createElement(itens);
}

function createElement(item) {
  let name = "";
  let image = "";
  
  item.map((item) => {
    name = item.name;
    image = item.image;
    const div = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
    
    div.className = "food-item";
       
    img.src = image;
    img.alt = `imagem de ${name}`;
    
    span.textContent = name;
    
    div.appendChild(img);
    div.appendChild(span);
    
    gallery.appendChild(div);
  });
}

