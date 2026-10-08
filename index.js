//http://www.omdbapi.com/?apikey=9b5d9901&s=marvel
const moviesWrapper = document.querySelector("#movieWrapper");


async function getMovies(searchTerm) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=9b5d9901&s=${searchTerm}`);
  const data =await response.json();
  console.log(data.Search);
  moviesWrapper.innerHTML = data.Search.map ((movie) => { return `<div class="movie-card">
    <img src="${movie.Poster}" alt="${movie.Title}">
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
  </div>`})
  .slice(0, 6).join('')
}



function onSearchChange(event) {
  console.log(event.target.value);
  getMovies(event.target.value) 
}