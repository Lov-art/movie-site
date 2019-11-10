const XHR = function() {
  this.getInstance();
};

XHR.prototype.getInstance = function() {
  this.xhr = new XMLHttpRequest();
};

XHR.prototype.get = function(path, callback) {
  this.xhr.onload = () => {
    callback(JSON.parse(this.xhr.response));
  };

  this.xhr.open("GET", path);
  this.xhr.send();
};

XHR.prototype.delete = function(path, callback) {
  this.xhr.onload = () => {
    callback(JSON.parse(this.xhr.response));
  };

  this.xhr.open("DELETE", path);
  this.xhr.send();
};

XHR.prototype.post = function(path, data, callback) {
  this.xhr.onload = function() {
    if (this.xhr.status >= 200 && this.xhr.status < 300) {
      callback(this.xhr);
    }
  };

  this.xhr.open("POST", path);
  this.xhr.setRequestHeader("Content-Type", "application/json");
  this.xhr.send(JSON.stringify(data));
};

XHR.prototype.put = function(path, data, callback) {
  this.xhr.onload = () => {
    callback();
  };

  this.xhr.open("PUT", path);
  this.xhr.setRequestHeader("Content-Type", "application/json");
  this.xhr.send(JSON.stringify(data));
};

const MoviesAPI = function() {
  this.host = "http://localhost:3000";

  this.GET_API_ROUTE = `${this.host}/films/`;
  this.DELETE_API_ROUTE = `${this.host}/films/`;
  this.EDIT_API_ROUTE = `${this.host}/films/`;
};

MoviesAPI.prototype.getMovies = function() {
  return new Promise((resolve) => {
    new XHR().get(this.GET_API_ROUTE, function(response) {
      resolve(response);
    });
  });
};

MoviesAPI.prototype.deleteMovie = function(id, cb) {
  new XHR().delete(this.DELETE_API_ROUTE, { id: ID }, function(xhr) {
    cb(xhr);
  });
};

MoviesAPI.prototype.editMovie = function(id, options, cb) {
  new XHR().put(this.EDIT_API_ROUTE, { id, options }, cb);
};
