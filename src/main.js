//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(data);
for(let i=0; i < data.results.length; i++){
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    let p = document.createElement("p");
    document.getElementById("root").appendChild(figure);
    document.querySelector("figure").appendChild(img).src = data.results[i].image;
    document.body.appendChild(p);
}