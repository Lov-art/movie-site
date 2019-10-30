const XHR = function() {
  this.getInstance();
};

XHR.prototype.getInstance = function() {
  this.xhr = new XMLHttpRequest();
};

XHR.prototype.get = function(path, callback) {
  this.xhr.onload = function() {
    if (this.xhr.status >= 200 && this.xhr.status < 300) {
      callback(this.xhr);
    }
  };

  this.xhr.open("GET", path);
  this.xhr.send();
};

XHR.prototype.post = function(path, data, callback) {
  this.xhr.onload = function() {
    if (this.xhr.status >= 200 && this.xhr.status < 300) {
      callback(this.xhr);
    }
  };

  this.xhr.setRequestHeader("Content-Type", "application/json");

  this.xhr.open("POST", path);
  this.xhr.send(JSON.stringify(data));
};

const MoviesAPI = function() {
  this.host = "http://localhost:3000";

  this.GET_API_ROUTE = `${this.host}/films`;
  this.DELETE_API_ROUTE = `${this.host}/delete`;
  this.EDIT_API_ROUTE = `${this.host}/edit`;
};

MoviesAPI.prototype.getMovies = function(cb) {
  new XHR().get(this.MOVIES_API_ROUTE, function(xhr) {
    cb(xhr);
  });
};

MoviesAPI.prototype.deleteMovie = function(id, cb) {
  new XHR().get(this.DELETE_API_ROUTE, { id: ID }, function(xhr) {
    cb(xhr);
  });
};

MoviesAPI.prototype.editMovie = function(id, data, cb) {
  new XHR().get(this.EDIT_API_ROUTE, { id: id, options: data }, function(xhr) {
    cb(xhr);
  });
};
