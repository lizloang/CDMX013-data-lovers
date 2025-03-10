import { filterData, sortData, searchInput, computeStats } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";
showAllCards();

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
  //Remove Stats
  let stats = document.getElementById("stats");
  while (stats.firstChild) {
    stats.removeChild(stats.firstChild);
  }
}

const allCharacters = document.getElementById("inicio");
allCharacters.addEventListener("click", () => {
  document.getElementById("number-of-results").innerHTML = "";
  removeCards();
  filteredCharacters = data.results;
  showAllCards();
  select.selectedIndex = "0";
  selectSpecie.selectedIndex = "0";
  selectStatus.selectedIndex = "0";
});

const select = document.getElementById("gender");
select.addEventListener("change", () => {
  let value = select.options[select.selectedIndex].text;
  const numberOfresults = genderFilter(value);
  selectSpecie.selectedIndex = "0";
  selectStatus.selectedIndex = "0";
  document.getElementById("number-of-results").innerHTML =
    value + " (<span id='number-results'>" + numberOfresults + "</span>)";
  if (value === "Gender") {
    document.getElementById("number-of-results").innerHTML = "";
    showAllCards();
  }
});

const selectSpecie = document.getElementById("specie");
selectSpecie.addEventListener("change", () => {
  let value = selectSpecie.options[selectSpecie.selectedIndex].text;
  const numberOfresults = specieFilter(value);
  document.getElementById("number-of-results").innerHTML =
    value + " (<span id='number-results'>" + numberOfresults + "</span>)";
  select.selectedIndex = "0";
  selectStatus.selectedIndex = "0";
  if (value === "Specie") {
    document.getElementById("number-of-results").innerHTML = "";
    showAllCards();
  }
});

const selectStatus = document.getElementById("status");
selectStatus.addEventListener("change", () => {
  let value = selectStatus.options[selectStatus.selectedIndex].text;
  document.querySelector("main");
  const numberOfresults = statusFilter(value);
  document.getElementById("number-of-results").innerHTML =
    value + " (<span id='number-results'>" + numberOfresults + "</span>)";
  select.selectedIndex = "0";
  selectSpecie.selectedIndex = "0";
  if (value === "Status") {
    document.getElementById("number-of-results").innerHTML = "";
    showAllCards();
  }
});

/* filteredCharacters have all the filtered data by name, specie or status. If the data is not filtered 
   takes data.results by default to show all de characters sort by a_z or z_a
*/
let filteredCharacters = data.results;

function genderFilter(gender) {
  removeCards();
  filteredCharacters = filterData(data.results, (element) => {
    return element.gender === gender;
  });
  return filteredCharacters.map(createCard).length;
}

function specieFilter(specie) {
  removeCards();
  filteredCharacters = filterData(data.results, (element) => {
    return element.species === specie;
  });
  return filteredCharacters.map(createCard).length;
}

function statusFilter(status) {
  removeCards();
  filteredCharacters = filterData(data.results, (element) => {
    return element.status === status;
  });

  return filteredCharacters.map(createCard).length;
}

document.getElementById("sort").addEventListener("click", () => {
  const sortButton = document.getElementById("sort").value;
  if (sortButton == "a_z") {
    const sortAZ = sortData(filteredCharacters, "a_z");
    document.getElementById("sort").value = "z_a";
    document
      .getElementById("sort")
      .removeChild(document.getElementById("sort").firstChild);
    document.getElementById("sort").innerHTML =
      "<i class='fa-light fa-arrow-down-z-a'></i>";
    removeCards();
    sortAZ.map(createCard);
  } else {
    const sortZA = sortData(filteredCharacters, "z_a");
    document.getElementById("sort").value = "a_z";
    document
      .getElementById("sort")
      .removeChild(document.getElementById("sort").firstChild);
    document.getElementById("sort").innerHTML =
      "<i class='fa-light fa-arrow-up-a-z'></i>";
    removeCards();
    sortZA.map(createCard);
  }
});

document.getElementById("search-input").addEventListener("input", (event) => {
  const { value } = event.target;
  removeCards();
  console.log("search: " + searchInput(data.results, value));
  if (searchInput(data.results, value) == "") {
    document.querySelector("main").innerHTML =
      "<div id='not-found-container'><p id='not-found'>That character is not in this universe.</p>" +
      "<p id='search-again'>Please, search again</p><img src='mortysad.gif' alt= 'morty sad'></div>";
  }
  return searchInput(data.results, value).map(createCard);
});

document.getElementById("statsButton").addEventListener("click", function () {
  document.getElementById("number-of-results").innerHTML = "";
  select.selectedIndex = "0";
  selectSpecie.selectedIndex = "0";
  selectStatus.selectedIndex = "0";
  removeCards();
  document.getElementById("stats").innerHTML =
    "<div>" +
    "<p>Status</p>" +
    "<canvas id='statusStats'></canvas>" +
    "</div>" +
    "<div>" +
    "<p>Species</p>" +
    "<canvas id='speciesStats'></canvas>" +
    "</div>" +
    "<div>" +
    "<p>Gender</p>" +
    "<canvas id='genderStats'></canvas>" +
    "</div>";
  createCharts("status");
  createCharts("species");
  createCharts("gender");
});

function createCharts(categorie) {
  const labels = Object.getOwnPropertyNames(
    computeStats(data.results, categorie)
  );
  const values = Object.values(computeStats(data.results, categorie));
  const colors = [
    "rgb(152,204,232)",
    "rgb(250,255,6)",
    "rgb(37,183,9)",
    "rgb(223,110,199)",
    "rgb(232,83,85)",
    "rgb(220,138,56)",
    "rgb(145,89,42)",
    "rgb(66,64,209)",
    "rgb(179,126,196)",
    "rgb(129,14,73)",
    "rgb(0,0,0)",
    "rgb(34,139,0)",
  ];
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: colors,
        borderColor: colors,
        data: values,
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data2,
    options: {
      plugins: {
        layout: {
          padding: 50,
        },
        legend: {
          labels: {
            font: {
              size: 28,
            },
          },
        },
      },
    },
  };

  let idStats = categorie + "Stats";

  new Chart(document.getElementById(idStats), config);
}
// Scrolling button
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".container-btn-top").classList.add("show");
  } else {
    document.querySelector(".container-btn-top").classList.remove("show");
  }
};
document.querySelector(".container-btn-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
