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

    
}
