//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";

for (let i = 0; i < data.results.length; i++) {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = data.results[i].image;
  let figcaption = document.createElement("figcaption");

  let cardFigure = document.querySelector("main").appendChild(figure);
  cardFigure.appendChild(img);
  let caption = cardFigure.appendChild(figcaption);
  let p = caption.appendChild(document.createElement("p"));
  p.innerHTML = data.results[i].name;
  //seted a class to change the name color and size in the card
  p.setAttribute("class", "character-name");
  let information = caption.appendChild(document.createElement("div"));
  //Here we need to add the circle with diferent color

  let aliveSpan = information.appendChild(document.createElement("span"));
  aliveSpan.innerHTML = data.results[i].status + " - ";
  let specieSpan = information.appendChild(document.createElement("span"));
  specieSpan.innerHTML = data.results[i].species + " - ";
  let genderSpan = information.appendChild(document.createElement("span"));
  genderSpan.innerHTML = data.results[i].gender;
  let button = caption.appendChild(document.createElement("button"));
  button.innerHTML = "show more";

  console.log("entro");
}
