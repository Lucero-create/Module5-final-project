const hamMenu = document.querySelector(`.ham-menu`);
const menu__links = document.querySelector(`.off-screen-menu`);

hamMenu.addEventListener(`click`, () => {
hamMenu.classList.toggle(`active`);
menu__links.classList.toggle(`active`);
})


//https://www.omdbapi.com/?apikey=9b5d9901&s=marvel
const moviesWrapper = document.querySelector("#movieWrapper");

async function getMovies(searchTerm) {
  const filter = document.querySelector("#filter").value;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=9b5d9901&s=${searchTerm}`,
  );
  const data = await response.json();
  let year = data.Search;
  if (year) {
    if (filter === "MOST RECENT") {
      console.log(filter);
      data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (filter === "OLDEST") {
      data.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }
    console.log(data.Search);
    moviesWrapper.innerHTML = data.Search.map((movie) => {
      return `<div class="movie-card">
    <img src="${movie.Poster}" alt="${movie.Title}">
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
  </div>`;
    })

      .slice(0, 6)
      .join("");
  } else {
    console.log("No movies found.");
  }
}
function onFilterChange() {
  const searchTerm = document.querySelector("#searchInput").value;
  getMovies(searchTerm);
}

function onSearchChange(event) {
  console.log(event.target.value);
  getMovies(event.target.value);
}



