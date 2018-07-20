module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },

    addMovie: (movieTitle, movieRating) => {
        const movie = {
            title: movieTitle,
            rating: movieRating
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
            .then(/* post was created successfully */)
            .catch(/* handle errors */);
    },
    // deleteMovie: () => {
    //
    //     const url = '/api/movies';
    //
    //     const options = {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(? ?),
    //     };
    //     fetch(url, options)
    //         .then(/* movie was deleted successfully */)
    //         .catch(/* handle errors */);
    // },
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
