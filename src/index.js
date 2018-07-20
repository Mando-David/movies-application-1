/**
 * es6 modules and imports
 */
import { getMovies, addMovie, deleteMovie, editMovie } from './api';
import { toASCII } from 'punycode';

const tbody = document.getElementById('insert-movies');

function refresh() {
    getMovies().then((movies) => {
        // console.log('Here are all the movies:');
    
        // for each movie, make a new row of table data
        movies.forEach(({ title, rating, id }) => {

            // inside this code, we want to add directly on top of the rows inside the body the title and the rating
            tbody.insertAdjacentHTML("afterbegin", `<tr><td>${title}</td><td>${rating}</td><td><button id="deleteBtn">Delete</button></td></tr>`);
            console.log(`id# ${id} - ${title} - rating: ${rating}`);
        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
}


//function formFields(){
//    const movieTitle = document.querySelector('#movieTitle').value;
//    const movieRating = document.querySelector('#movieRating').value;
//    console.log(movieTitle, movieRating)
//    //addMovie(movieTitle, movieRating)
//}

function submitNewMovie() {
    addMovie();
    // need to find a way to empty the table, then regenerate it
    refresh();
}

document.getElementById('movieSubmitBtn').addEventListener('click', submitNewMovie, true);
document.getElementById('deleteBtn').addEventListener('click', deleteMovie, true);

refresh();