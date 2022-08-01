//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";

for (let i = 0; i < data.results.length; i++) {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = data.results[i].image;
  let figcaption = document.createElement("figcaption");

  let cardFigure = document.getElementById("root").appendChild(figure);
  cardFigure.appendChild(img);
  let caption = cardFigure.appendChild(figcaption);
  let p = caption.appendChild(document.createElement("p"));
  p.innerHTML = data.results[i].name;
  let aliveSpan = caption.appendChild(document.createElement("span"));
  aliveSpan.innerHTML = data.results[i].status;
  let specieSpan = caption.appendChild(document.createElement("span"));
  specieSpan.innerHTML = data.results[i].species;
  let genderSpan = caption.appendChild(document.createElement("span"));
  genderSpan.innerHTML = data.results[i].gender;
  let button = caption.appendChild(document.createElement("button"));
  button.innerHTML = "show more";

  console.log("entro");

}
