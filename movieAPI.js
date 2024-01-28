//creat a class for movie and rental hub
class MyMovie {
    constructor(title, genre, releaseYear, id) {
        this.title = title;
        this.genre = genre;
        this.id = id;
        this.releaseYear = releaseYear;
    }
}

class MovieRentalSystem{
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
//initialization of movieHub
const rentalHub = new MovieHub();
rentalHub.addMovie("Game of Thrones", "Fantasy", 2019, 32145);
rentalHub.addMovie("Olympus has fallen", "Action", 2017, 45321);
rentalHub.addMovie("Gangs of Lagos", "Action", 2022, 43251);
rentalHub.addMovie("Blade", "Action", 2011, 12345);
rentalHub.addMovie("House of the Dragon", "Action", 2022, 54321);

console.log('These are the available movies:');
console.log(rentalHub.listAvailableMovies());

console.log('\nRenting "Gangs of Lagos"...');
rentalHub.rentMovie("Gangs of Lagos");

console.log('\nThe available movies after renting are:');
console.log(rentalHub.listAvailableMovies());

console.log('\nThe rented movie is:');
console.log(rentalHub.listAvailableMovies());

console.log('\nReturning "Gangs of Lagos"...');
rentalHub.returnMovie("Gangs of Lagos");

console.log('\nThe available movies after returning:');
console.log(rentalHub.listAvailableMovies());



// const rentalSystem = new MovieRentalSystem();
// rentalSystem.addMovie("Game of Thrones", "Fantasy", 2019, 32145);
// rentalSystem.addMovie("Olympus has fallen", "Action", 2017, 45321);
// rentalSystem.addMovie("Gangs of Lagos", "Action", 2022, 23451);
// rentalSystem.addMovie("Blade", "Action", 2011, 12345);
// rentalSystem.addMovie("House of the Dragon", "Action", 2022, 54321);

// console.log("Available movies:");
// console.log(rentalSystem.listAvailableMovies());

// console.log("\nRenting 'Blade'...");
// rentalSystem.rentMovie("Blade");

// console.log("\nAvailable movies after renting:");
// console.log(rentalSystem.listAvailableMovies());

// console.log("\nRented movies:");
// console.log(rentalSystem.listRentedMovies());

// console.log("\nReturning 'Blade'...");
// rentalSystem.returnMovie("Blade");

// console.log("\nAvailable movies after returning:");
// console.log(rentalSystem.listAvailableMovies());