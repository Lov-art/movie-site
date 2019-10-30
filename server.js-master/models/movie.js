//Вынисти в отдельный js файл
function Movie (options){
    this.ID = options.ID;
    this.Title = options.Title;
    this.Description = options.Synopsis;
    this.RunTime = options.RunTime;
    this.OpeningDate = options.OpeningDate;
    this.TitleAlt = options.TitleAlt;
    this.GenreId = options.GenreId;
    this.Actors = options.Actors;
    this.Genred = options.Genred;
    this.RatingCount =  options.RatingCount;
    this.srcImage = "";
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
    }
    this.list.push(new Movie(movie));
}

MovieList.prototype.findMovie = function (index) {
    return this.list.find(x=>x.ID === index);
}

MovieList.prototype.deleteMovie = function (index) {
   let indexDel = this.list.findIndex(x=>x.ID === index);
   if(indexDel !== -1){
        this.list.splice(indexDel,1);
        return {result:true, data: "films id deleted"}
   }
   else {
       return {result:false, data:"film is not defined"}
   }
}

MovieList.prototype.edit = function (index, options) {
    let item = this.findMovie(index);
    if(!item){
        return {result:false, data:"film is not defined"}
    }
    for(var key in options){
        item[key] = options[key];
    }
    return {result:true, data:"film is edit"}
}

MovieList.prototype.findByOtions = function(options){
    let tempList = [];

        for (let index = 0; index < this.list.length; index++) {
        let film = this.list[index];
        let addInTemp;
        // let hasActors = false;

            for (let op in options) {
                addInTemp = true;
                // if(op.toLowerCase() === "actors"){
                if(typeof film[op] === 'undefined'){
                    addInTemp = false;
                    continue;
                }

                if(options[op] instanceof Array && options[op].length > 0) {
                    for (let x = 0; x < options[op].length; x++) {
                        if(film[op].includes(options[op][x])) { addInTemp = true; break }
                        else { addInTemp = false }   
                    }
                } else {
                    if(film[op] instanceof Array && film[op].includes(options[op])) { addInTemp = true; }
                    else if(film[op] !== options[op]) { addInTemp = false; }
                }    
                
                if(addInTemp) { tempList.push(film); } 
            }

        }

    return tempList;
}

module.exports = MovieList;