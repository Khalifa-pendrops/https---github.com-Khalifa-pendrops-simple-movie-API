// Create a class for movie and rental hub
class MyMovie {
  constructor(title, genre, releaseYear, id) {
    this.title = title;
    this.genre = genre;
    this.id = id;
    this.releaseYear = releaseYear;
    this.available = true; // Add a property to track availability
  }
}

class MovieHub {
  constructor() {
    this.movies = [];
    this.rentedMovies = [];
  }

  // Instantiate objects
  addMovie(title, genre, releaseYear, id) {
    const movie = new MyMovie(title, genre, releaseYear, id);
    this.movies.push(movie);
  }

  rentMovie(title) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.title === title && movie.available
    );
    if (movieIndex !== -1) {
      const rentedMovie = this.movies.splice(movieIndex, 1)[0];
      rentedMovie.available = false;
      this.rentedMovies.push(rentedMovie);
      return rentedMovie;
    } else {
      return null;
    }
  }

  returnMovie(title) {
    const rentedMovieIndex = this.rentedMovies.findIndex(
      (movie) => movie.title === title
    );
    if (rentedMovieIndex !== -1) {
      const returnedMovie = this.rentedMovies.splice(rentedMovieIndex, 1)[0];
      returnedMovie.available = true;
      this.movies.push(returnedMovie);
      return returnedMovie;
    } else {
      return null;
    }
  }

  listAvailableMovies() {
    return this.movies.filter((movie) => movie.available);
  }

  listRentedMovies() {
    return this.rentedMovies;
  }
}

// Initialization of movieHub
const rentalHub = new MovieHub();
rentalHub.addMovie("Game of Thrones", "Fantasy", 2019, 32145);
rentalHub.addMovie("Olympus has fallen", "Action", 2017, 45321);
rentalHub.addMovie("Gangs of Lagos", "Action", 2022, 43251);
rentalHub.addMovie("Blade", "Action", 2011, 12345);
rentalHub.addMovie("House of the Dragon", "Action", 2022, 54321);

console.log("Available movies:");
console.log(rentalHub.listAvailableMovies());

console.log("\nRenting 'Gangs of Lagos'...");
rentalHub.rentMovie("Gangs of Lagos");

console.log("\nAvailable movies after renting:");
console.log(rentalHub.listAvailableMovies());

console.log("\nRented movies:");
console.log(rentalHub.listRentedMovies());

console.log("\nReturning 'Gangs of Lagos'...");
rentalHub.returnMovie("Gangs of Lagos");

console.log("\nAvailable movies after returning:");
console.log(rentalHub.listAvailableMovies());
