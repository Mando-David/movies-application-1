/**
 * es6 modules and imports
 */
import { getMovies, addMovie, deleteMovie, editMovie } from './api';


getMovies().then((movies) => {
  // console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {

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
