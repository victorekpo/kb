//Require Express module
const express = require('express');
const request = require('request');
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
  
  const pipe = req.pipe(request.get('http://localhost:5000/data'));
  const response = [];
  let count=0;
  
  pipe.on('data', function(chunk) {
    response.push(chunk);
    if(response.length > count){
      res.write(chunk);
      count++;
    }
    //res.end();
  });
  
  pipe.on('end', function() {
    const res2 = Buffer.concat(response);
    console.log(res2);
    res.end();
  });
});

app.get('/data', function(req,res) {
  // res.json({a:1,b:2});
  res.header("Content-Type",'application/json');
  res.sendFile(path.join(__dirname, 'data.js'));
 // res.sendFile(path.join(__dirname, 'data2.js'));
});

//Listen on the defined port
app.listen(port, function(){
 console.log('Listening on port 5000')
})
