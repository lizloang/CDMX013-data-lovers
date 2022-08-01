//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";


for (let i = 0; i < data.results.length; i++) {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = data.results[i].image;
  let figcaption = document.createElement("figcaption");
  figcaption.innerHTML = "caption";

  let cardFigure = document.getElementById("root").appendChild(figure);

  let cardImage = cardFigure.appendChild(img);
  cardFigure.appendChild(figcaption);

  console.log("entro");
}
