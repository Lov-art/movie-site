function Movie (title, director, actors, synopsis ) {
	this.title = title;
	this.director = director;
	this.actors = actors;
	this.synopsis = synopsis;

	this.getTitle = function (){
		var str=" ";

		for (var i = 0; i < this.title.length ; i++) {
				str += this.title[i].getName()
		}
		return str;
	}

	this.getDirector = function (){
		var str=" ";

		for (var i = 0; i < this.director.length ; i++) {
				str += this.director[i].getName()
		}
		return str;	
	}

	this.getActors = function (){
		var str=" ";

		for (var i = 0; i < this.actors.length ; i++) {
				str += this.actors[i].getName()
		}
		return str;
	
	}


	this.getSynopsis = function(){
		var str=" ";

		for (var i = 0; i < this.synopsis.length ; i++) {
				str += this.synopsis[i].getName()
		}
		return str;
	}



	
}

function Actor ( name){

	this.name = name ;
	this.getName = function(){
		return this.name;
	}
}

function director ( name){

	this.name = name ;
	this.getName = function(){
		return this.name;
	}

	
}		


function title ( name ){

	this.name = name ;
	this.getName = function(){
		return this.name;
	}

}	

function synopsis (name){
	this.name = name ;
	this.getName = function(){
		return this.name;
	}
}


	
    
    


	
// map
// стрелочная функция




