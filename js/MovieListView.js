const MovieListView = function() {};

MovieListView.prototype.render = function(movies, el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}

	for(let i=0; i< movies.length; i++) {
		new MovieView().render(movies[i], el);
	}
};