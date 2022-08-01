//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";

console.log(data);
for (let i = 0; i < data.results.length; i++) {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let figcaption = document.createElement("figcaption");
  figcaption.innerHTML = "caption";

  document.getElementById("root").appendChild(figure).appendChild(img).src =
    data.results[i];
}
