//creat a class for movie and rental hub
class MyMovie {
    constructor(title, genre, releaseYear, id) {
        this.title = title;
        this.genre = genre;
        this.id = id;
        this.releaseYear = releaseYear;
    }
}

class MovieHub{
    constructor() {
        this.movies = [];
        this.rentedMovies = [];
    }

    //instantiate objects
    addMovie(title, genre, releaseYear, id) {
        const movie = new MyMovie(title, genre, releaseYear, id);
        this.movies.push(movie);
    }

    rentMovie(title) {
        const movieIndex = this.movies.findIndex((movie) => movie.title === title && movie.available);
        if (movieIndex !== -1) {
            const rentedMovie = this.movies.splice(movieIndex, 1)[0];
            rentedMovie.available = false;
            this.rentedMovies.push(rentedMovie);
            return rentedMovie;
        } else {
            return 'movie not found or already rented';
        }
    }

    returnMovie(title) {
        const rentedMovieIndex = this.rentedMovies.findIndex((movie) => movie.title === title);
        if (rentedMovieIndex !== -1) {
            const returnedMovie = this.rentedMovies.splice(
              rentedMovieIndex,
              1
            )[0];
            returnedMovie.available = true;
            this.movies.push(returnedMovie);
            return returnedMovie;
        } else {
            return "movie not found or nor rented";
        }
            
    }

    listAvailableMovies() {
        return this.movies.filter((movie) => movie.available);
    }
}
