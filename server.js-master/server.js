const http = require('http');
const app = require('./app.js');

const port = process.env.PORT || 3000;

http.createServer(app).listen(port);
