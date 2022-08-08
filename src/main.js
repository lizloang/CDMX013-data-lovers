import { filterData } from "./data.js";
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";
console.log(data);

//Esto sucede al cargar por primera vez la pagina
showAllCards();

const select = document.getElementById("gender");
select.addEventListener("change", (event) => {
  const value = select.options[select.selectedIndex].text;
  console.log("gender value: " + value);
  genderFilter(value);
});

const selectSpecie = document.getElementById("specie");
selectSpecie.addEventListener("change", (event) => {
  const value = selectSpecie.options[selectSpecie.selectedIndex].text;
  console.log("specie value: " + value);
  specieFilter(value);
});

const selectStatus = document.getElementById("status");
selectStatus.addEventListener("change", (event) => {
  const statusValue = selectStatus.options[selectStatus.selectedIndex].text;
  document.querySelector("main");
  statusFilter(statusValue);
});

document.getElementById("filter").addEventListener("click", function () {
  const element = document.getElementById("filter-container");
  const style = window.getComputedStyle(element);
  const visibility = style.getPropertyValue("visibility");

  if (visibility === "hidden") {
    document.getElementById("filter-container").style.visibility = "visible";
  } else {
    document.getElementById("filter-container").style.visibility = "hidden";
  }
});

function createCard(element) {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = element.image;
  let figcaption = document.createElement("figcaption");

  let cardFigure = document.querySelector("main").appendChild(figure);
  cardFigure.appendChild(img);
  let caption = cardFigure.appendChild(figcaption);
  let p = caption.appendChild(document.createElement("p"));
  p.innerHTML = element.name;
  //seted a class to change the name color and size in the card
  p.setAttribute("class", "character-name");
  let information = caption.appendChild(document.createElement("div"));
  information.setAttribute("class", "information");
  //Here we need to add the circle with diferent color
  let status = information.appendChild(document.createElement("div"));
  status.setAttribute("class", "status");

  if (element.status == "Alive") {
    status.style.borderColor = "green";
    status.style.backgroundColor = "green";
  } else if (element.status == "Dead") {
    status.style.borderColor = "red";
    status.style.backgroundColor = "red";
  } else {
    status.style.borderColor = "gray";
    status.style.backgroundColor = "gray";
  }

  let aliveSpan = information.appendChild(document.createElement("span"));
  aliveSpan.innerHTML = element.status + " - ";
  let specieSpan = information.appendChild(document.createElement("span"));
  specieSpan.innerHTML = element.species + " - ";
  let genderSpan = information.appendChild(document.createElement("span"));
  genderSpan.innerHTML = element.gender;
}

function showAllCards() {
  for (let i = 0; i < data.results.length; i++) {
    createCard(data.results[i]);
  }
}

function removeCards() {
  let main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function genderFilter(gender) {
  removeCards();
  let genders = filterData(data.results, (element) => {
    if (element.gender === gender) {
      return true;
    }
  });
  genders.map(createCard);
}

function specieFilter(specie) {
  removeCards();
  let species = filterData(data.results, (element) => {
    if (element.species === specie) {
      return true;
    }
  });
  species.map(createCard);
}

function statusFilter(status) {
  removeCards();
  let typeOfStatus = filterData(data.results, (element) => {
    if (element.status === status) {
      console.log("element: " + element.status);
      return true;
    }
  });

  typeOfStatus.map(createCard);
}
