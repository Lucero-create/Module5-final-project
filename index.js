//http://www.omdbapi.com/?apikey=9b5d9901&s=marvel
const movieWrapper = document.getElementById("movieWrapper");
const nameWrapper = document.getElementById(".searchName");

async function fetchMovies(searchTerm) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=9b5d9901&s=${searchTerm}`,
  );
  nameWrapper.innerHTML = searchTerm;
  const data = await response.json();
  movieWrapper.innerHTML = data.Search.map((movie) => {
    return `
      <div class="movie-card">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;
  })
    .slice(0, 5)
    .join("");
  return data.Search;
}

function onSearchChange(event) {
  const searchTerm = event.target.value;
  getMovies(searchTerm);
}

async function getMovies(searchTerm) {
  const movies = await fetchMovies(searchTerm);
  console.log(movies);
}
