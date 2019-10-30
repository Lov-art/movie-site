const MovieView = function() {};

MovieView.prototype.createMarkup = function(movie) {
	return `
		<div class="col-lg-5 col-xl-4">

			
			<div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4 img-icon">
				<img class="img-fluid" src="${movie.srcImage}" alt="Sample image">
				<a>
					<div class="mask rgba-white-slight"></div>
				</a>
			</div>

		</div>
		

		
		<div class="col-lg-7 col-xl-8 movie">

			
			<h3 class="font-weight-bold mb-3 ">${movie.Title}</h3>
			
			<p class="dark-grey-text movie_synopsis"><strong>Описание : </strong>${movie.Synopsis}</p>
			
			<p><strong>Рейтинг : </strong>${movie.Rating}</p>

			<button class="delete-movie" id="${movie.ID}">delete</button>
			
			
		</div>
		
	

	<hr class="my-5"> 

	`;
};

MovieView.prototype.render = function(movie, el) {
	let container = document.createElement('div');

  	container.classList.add('movie-container');
	container.innerHTML = this.createMarkup(movie);

	el.appendChild(container);
};
