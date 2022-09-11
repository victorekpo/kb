const express = require('express');
const http = require('http');
const testRoute = require('./routes/test');

const port = 8880;

const app = express();

app.use('/api/test', testRoute);

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log('Backend HTTP server is running...');
});


