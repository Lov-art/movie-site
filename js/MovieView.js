const MovieView = function() {};

MovieView.prototype.createMarkup = function(movie) {
	return `
		<div class="col-lg-5 col-xl-4">
			<div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4 img-icon">
				${movie.srcImage && `<img class="img-fluid" src="${movie.srcImage}" alt="Sample image">`}
				<a>
					<div class="mask rgba-white-slight"></div>
				</a>
			</div>
		</div>
		
		<div class="col-lg-7 col-xl-8 movie">
			<div class="movie--description">
				<h3 class="font-weight-bold mb-3 ">${movie.Title}</h3>
				<p class="dark-grey-text movie_synopsis"><strong>Описание : </strong>${movie.TitleAlt}</p>
				<p><strong>Рейтинг : </strong>${movie.RatingCount}</p>
				<div>	
					<button class="delete-movie" id="${movie.ID}">delete</button>
					<button class="edit-movie" id="${movie.ID}">edit</button>
				</div>
			</div>
			<div class="movie--edit">
				<input class="font-weight-bold mb-3 title" value="${movie.Title}">
				<p class="dark-grey-text movie_synopsis"><strong>Описание : </strong><input class="synopsis" value="${movie.TitleAlt}" ></p>
				<p><strong>Рейтинг : </strong><input class="rating" value="${movie.RatingCount}" ></p>
				<div>	
					<button class="edit-yes" id="${movie.ID}">yes</button>
					<button class="edit-no" id="${movie.ID}">no</button>
				</div>
			</div>
		</div>

	`;
};

MovieView.prototype.render = function(movie, el) {
	let container = document.createElement('div');

	container.classList.add('movie-container', 'col-xl-12');
	container.innerHTML = this.createMarkup(movie);

	el.appendChild(container);
};

