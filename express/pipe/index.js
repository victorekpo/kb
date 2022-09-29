//Require Express module
const express = require('express');
const request = require('request')
, JSONStream = require('JSONStream')
, es = require('event-stream')
const path = require('path');

//Define port for local web server
let port = 5000;

//Initialize your express app
const app = express();

//Create simple get route for the index of your app
app.get('/', function(req,res){
 res.send('Hello World');
})

app.get('/pipe', function(req,res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Transfer-Encoding': 'chunked'
  });
  
  //const pipe = req.pipe(request.get('http://localhost:5000/data'));
  const response = [];
  let count=0;
  var stream = JSONStream.parse() //rows, ANYTHING, doc

  const newReq = request.get('http://localhost:5000/data')
  // const logger = es.mapSync(function (data) {  //create a stream that logs to stderr,
  //   console.log(data)
  //   return data  
  // });

  newReq.pipe(stream);
  //stream.pipe(logger);
  

  stream.on('data', function(data) {
    //res.write(data);
    console.log('received:', data);
    res.end();
  });
  // pipe.on('data', function(chunk) {
  //   response.push(chunk);
  //   if(response.length > count){
  //     res.write(chunk);
  //     count++;
  //   }
  // });
  
  // pipe.on('end', function() {
  //   const res2 = Buffer.concat(response);
  //   console.log(res2);
  //   res.end();
  // });
});

app.get('/data', function(req,res) {
  res.header("Content-Type",'application/json');
  res.sendFile(path.join(__dirname, 'data1.json'));
});

//Listen on the defined port
app.listen(port, function(){
 console.log('Listening on port 5000')
})
