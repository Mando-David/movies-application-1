/**
 * es6 modules and imports
 */
import { getMovies, addMovie, deleteMovie, editMovie } from './api';

getMovies().then((movies) => {
  // console.log('Here are all the movies:');

    // in this section, we assign the table body to the variable tbody
    const tbody = document.getElementById('insert-movies');

    // for each movie, make a new row of table data
    movies.forEach(({ title, rating, id }) => {

        // inside this code, we want to add directly on top of the rows inside the body the title and the rating
        tbody.insertAdjacentHTML("beforebegin", `<tr><td>${title}</td><td>${rating}</td></tr>`);
    console.log(`id# ${id} - ${title} - rating: ${rating}`);
    });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});


function formFields(){
    const movieTitle = document.querySelector('#movieTitle').value;
    const movieRating = document.querySelector('#movieRating').value;
    console.log(movieTitle, movieRating)
    //addMovie(movieTitle, movieRating)
}

document.getElementById('movieSubmitBtn').addEventListener('click', formFields, true);