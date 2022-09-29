//Require Express module
const express = require('express');
const request = require('request')
const JSONStream = require('JSONStream')
const es = require('event-stream')
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
    'Content-Type': 'application/json'
  });
  
  //const pipe = req.pipe(request.get('http://localhost:5000/data'));
  let response = [];
  let count=0;
  var stream = JSONStream.parse() //rows, ANYTHING, doc

  const newReq = request.get('http://localhost:5000/data')
  // const logger = es.mapSync(function (data) {  //create a stream that logs to stderr,
  //   console.log(data)
  //   return data  
  // });

  while(count < 1000) {
    newReq.pipe(stream);
    count++;
  }

  //stream.pipe(logger);
  stream.on('drain', function() {
    console.log('draining');
  })

  stream.on('data', function(data) {
    response.push(data);
    console.log('response array', response.length)
    if(response.length == 10) {
      res.write(JSON.stringify(response));
      console.log('received:', response);
      response=[];
    }

    
    //count++;
  });

  stream.on('end', function() {
    console.log('total streams',count)
    if(response.length == 0) {
      res.end();
    }
  });
});

app.get('/data', function(req,res) {
  res.header("Content-Type",'application/json');
  res.sendFile(path.join(__dirname, 'data3.json'));
});

//Listen on the defined port
app.listen(port, function(){
 console.log('Listening on port 5000')
})
