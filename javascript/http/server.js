const http = require('http'); // core module

const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

server.listen(3000);
