//Require Express module
const express = require('express');

//Define port for local web server
let port = 5000;

//Initialize your express app
const app = express();

//Create simple get route for the index of your app
app.get('/', function(req,res){
 res.send('Hello World');
})

//Listen on the defined port
app.listen(port, function(){
 console.log('Listening on port 5000')
})
