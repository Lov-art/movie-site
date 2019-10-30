function Movie (options){
  this.ID = options.ID;
  this.Title = options.Title;
  this.Description = options.Synopsis;
  this.RunTime = options.RunTime;
  this.OpeningDate = options.OpeningDate;
  this.TitleAlt = options.TitleAlt;
  this.GenreId = options.GenreId;
  this.Actors = [];
  this.RatingCount =  options.CustomerRatingTrailerStatistics.RatingCount;
}

function MovieList (){
  this.list = [];
}

MovieList.prototype.setMovieList = function (listMove) {
  if(listMove instanceof Array){
      for (let index = 0; index < listMove.length; index++) {
          this.list.push(new Movie(listMove[index]));
      }
  }
  else throw new Error("Is not array");
}

MovieList.prototype.addMovie = function (movie){
  if(movie instanceof Array){
      this.setMovieList(movie)
      return;
  }
  this.list.push(new Movie(movie));
}

MovieList.prototype.findMovie = function (index) {
  return this.list.find(x=>x.ID === index);
}

MovieList.prototype.deleteMovi = function (index) {
 let indexDel = this.list.findIndex(x=>x.ID === index);
 if(indexDel !== -1){
      this.list.splice(indexDel,1);
 }
}

MovieList.prototype.edit = function (index, options) {
  let item = this.findMovie(index);
  for(var key in options){
      item[key] = options[key];
  }
}



function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }

    return xhr;
  }
  
  var xhr = createCORSRequest('GET', "http://localhost:3000/films");
  var result = {};
  xhr.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200){
        //let divCont = document.querySelector('.content');
        result = JSON.parse(this.responseText);
    }
  }

  xhr.send();   

  var listMovie = new MovieList();

  console.log(result)

  if(Object.keys(result).length > 0){
    listMove.setMovieList(result);
  }

  console.log(listMovie);
