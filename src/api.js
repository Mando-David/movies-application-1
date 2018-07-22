module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },

    addMovie: (movieTitle, movieRating) => {
        const newTitle = document.getElementById('movieTitle').value;
        const newRating = document.getElementById('movieRating').value;
        const movie = {
            title: newTitle,
            rating: newRating
        };
        const url = '/api/movies';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        fetch(url, options)
            .then( () => {
                console.log(`${newTitle} added to the movie list`);
            })
            .catch(/* handle errors */);
    },
    deleteMovie: (movieTitle, movieRating) => {
        const deletedMovie = documument.getElementById();
        const url = '/api/movies';

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        fetch(url, options)
            .then(/* movie was deleted successfully */)
            .catch(/* handle errors */);
    },
    // editMovie: () => {
    //     const movie = {
    //         id: movieID,
    //         title: movieTitle,
    //         rating: movieRating
    //     }
    //     const url = '/api/movies'
    //
    //     const options = {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(movie),
    //     };
    //     fetch(url, options)
    //         .then(/* movie was edited successfully */)
    //         .catch(/* handle errors */);
    // }
}