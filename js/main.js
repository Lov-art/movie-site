var Movie = function(Movies) {
  Object.keys(Movies).map(key => {
    this[key] = Movies[key];
  });
};

Movie.prototype.getData = function(data) {
  return this[data];
};

Movie.prototype.setData = function(data, Movies) {
  this[data] = Movies;
};

Movie.prototype.deleteData = function(data) {
  delete this[data];
};

var MoviesList = function(movies) {
  this.movies = [];

  if (movies.length > 0) {
    for (var i = 0; i < movies.length; i++) {
      this.movies.push(new Movie(movies[i]));
    }
  }
};

MoviesList.prototype.addMovie = function(Movies) {
  this.movies.push(new Movie(Movies));
};

MoviesList.prototype.getMovies = function() {
  return this.movies;
};

MoviesList.prototype.getMovieById = function(ID) {
  if (this.movies.length === 0) return undefined;

  for (var i = 0; i < this.movies.length; i++) {
    if (this.movies[i].getData("ID") === ID) return this.movies[i];
  }

  return undefined;
};

MoviesList.prototype.findBy = function(property, value) {
  if (this.movies.length === 0) return undefined;

  for (var i = 0; i < this.movies.length; i++) {
    if (this.movies[i].getData(property) === value) return this.movies[i];
  }

  return undefined;
};

MoviesList.prototype.sortBy = function(property, direction) {
  if (this.movies.length === 0) return undefined;

  this.movies.sort((a, b) => {
    if (a.getData(property) === b.getData(property)) return 0;

    if (direction === "up") {
      return a.getData(property) > b.getData(property) ? 1 : -1;
    } else {
      return a.getData(property) > b.getData(property) ? -1 : 1;
    }
  });

  return this.getMovies();
};

MoviesList.prototype.deleteMovieById = function(ID) {
  if (this.movies.length === 0) return undefined;

  for (var i = 0; i < this.movies.length; i++) {
    if (this.movies[i].getData("ID") === ID) this.movies.splice(i, 1);
  }
};

const MoviesContainer = document.getElementById("movies-container");
const MoviesListView = new MovieListView();
const moviesApi = new MoviesAPI();

moviesApi.getMovies().then(function(response) {
  const myMoviesList = new MoviesList(response.list);

  MoviesListView.render(myMoviesList.getMovies(), MoviesContainer);

  document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("delete-movie")) {
      const movieId = e.target.id;

      myMoviesList.deleteMovieById(movieId);
      MoviesListView.render(myMoviesList.getMovies(), MoviesContainer);
    }
  });

  document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("edit-movie")) {
      const button = e.target;
      const container = button.parentNode.parentNode.parentNode;
      const desciptionContainer = button.parentNode.parentNode;
      const editContainer = container.getElementsByClassName("movie--edit")[0];

      desciptionContainer.style.display = "none";
      editContainer.style.display = "block";
    }
  });

  document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("edit-no")) {
      const button = e.target;
      const container = button.parentNode.parentNode.parentNode;
      const editContainer = button.parentNode.parentNode;
      const desciptionContainer = container.getElementsByClassName(
        "movie--description"
      )[0];

      desciptionContainer.style.display = "block";
      editContainer.style.display = "none";
    }
  });

  document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("edit-yes")) {
      const button = e.target;
      const id = e.target.id;
      const container = button.parentNode.parentNode.parentNode;
      const editContainer = button.parentNode.parentNode;
      const desciptionContainer = container.getElementsByClassName(
        "movie--description"
      )[0];

      const Title = editContainer.getElementsByClassName("title")[0].value;
      const TitleAlt = editContainer.getElementsByClassName("synopsis")[0]
        .value;
      const RatingCount = editContainer.getElementsByClassName("rating")[0]
        .value;

      moviesApi.editMovie(
        id,
        {
          Title,
          TitleAlt,
          RatingCount
        },
        function() {
          desciptionContainer.style.display = "block";
          editContainer.style.display = "none";

          moviesApi.getMovies().then(moviesReponse =>
            MoviesListView.render(
              new MoviesList(moviesReponse.list).getMovies(),
              MoviesContainer
            )
          );
        }
      );
    }
  });
});
